/**
 * not-a-bot.ai — Main JavaScript
 * Version: 1.0.0 | 2026-05-08
 * Vanilla ES6+ — no dependencies
 */

(function () {
  'use strict';

  /* -------------------------------------------------------------------------
     1. Sticky Nav + Scroll Shadow
  -------------------------------------------------------------------------- */
  function initStickyNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on init
  }

  /* -------------------------------------------------------------------------
     2. Mobile Hamburger Menu
  -------------------------------------------------------------------------- */
  function initMobileMenu() {
    const hamburger = document.querySelector('.nav__hamburger');
    const mobileMenu = document.querySelector('.nav__mobile');
    if (!hamburger || !mobileMenu) return;

    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-controls', 'mobile-menu');
    mobileMenu.setAttribute('id', 'mobile-menu');

    function toggleMenu(open) {
      hamburger.classList.toggle('open', open);
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    }

    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.contains('open');
      toggleMenu(!isOpen);
    });

    // Close on mobile link click
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (
        hamburger.classList.contains('open') &&
        !hamburger.contains(e.target) &&
        !mobileMenu.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hamburger.classList.contains('open')) {
        toggleMenu(false);
        hamburger.focus();
      }
    });
  }

  /* -------------------------------------------------------------------------
     3. Smooth Scroll to Anchors
  -------------------------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const navHeight = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '68'
        );
        const targetOffset = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
      });
    });
  }

  /* -------------------------------------------------------------------------
     4. Intersection Observer — Fade-in animations
  -------------------------------------------------------------------------- */
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: show all elements immediately
      document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach((el) => {
        el.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach((el) => {
      observer.observe(el);
    });
  }

  /* -------------------------------------------------------------------------
     5. FAQ Accordion
  -------------------------------------------------------------------------- */
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (!question || !answer) return;

      // Set ARIA attributes
      const answerId = 'faq-answer-' + Math.random().toString(36).substr(2, 6);
      answer.setAttribute('id', answerId);
      question.setAttribute('aria-controls', answerId);
      question.setAttribute('aria-expanded', 'false');

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all others (accordion behaviour)
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains('open')) {
            otherItem.classList.remove('open');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherQuestion = otherItem.querySelector('.faq-question');
            if (otherAnswer) otherAnswer.classList.remove('open');
            if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        item.classList.toggle('open', !isOpen);
        answer.classList.toggle('open', !isOpen);
        question.setAttribute('aria-expanded', String(!isOpen));
      });

      // Keyboard: Space/Enter already handled by button default
    });
  }

  /* -------------------------------------------------------------------------
     6. Language Switcher
  -------------------------------------------------------------------------- */
  function initLanguageSwitcher() {
    // Detect current lang from path prefix
    const path = window.location.pathname;
    let currentLang = 'en';
    if (path.startsWith('/nl') || path.startsWith('/nl/')) currentLang = 'nl';
    if (path.startsWith('/fr') || path.startsWith('/fr/')) currentLang = 'fr';

    // Mark active language link
    document.querySelectorAll('.nav__lang-link').forEach((link) => {
      const lang = link.getAttribute('data-lang');
      if (lang === currentLang) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'true');
      }
    });

    // Handle clicks (redirect logic)
    document.querySelectorAll('[data-lang-switch]').forEach((el) => {
      el.addEventListener('click', function (e) {
        const targetLang = this.getAttribute('data-lang-switch');
        if (targetLang === currentLang) return;

        e.preventDefault();

        let basePath = path;
        // Strip current lang prefix
        if (currentLang !== 'en') {
          basePath = basePath.replace(new RegExp('^/' + currentLang), '') || '/';
        }

        // Build new path
        let newPath;
        if (targetLang === 'en') {
          newPath = basePath || '/';
        } else {
          newPath = '/' + targetLang + (basePath.startsWith('/') ? basePath : '/' + basePath);
        }

        window.location.href = newPath;
      });
    });
  }

  /* -------------------------------------------------------------------------
     7. Animated number counters
  -------------------------------------------------------------------------- */
  function animateCounter(el, targetValue, suffix, duration) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (targetValue - start) * eased);
      el.textContent = current.toLocaleString('nl-NL') + (suffix || '');
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /* Export for use in roi-calculator.js */
  window.NAB = window.NAB || {};
  window.NAB.animateCounter = animateCounter;

  /* -------------------------------------------------------------------------
     8. Nav CTA hide on mobile (already in css, but also mark active page)
  -------------------------------------------------------------------------- */
  function markActivePage() {
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.nav__link, .nav__mobile-link').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPath = href.replace(/\/$/, '') || '/';
      if (currentPath === linkPath) {
        link.setAttribute('aria-current', 'page');
        link.style.color = 'var(--color-text)';
      }
    });
  }

  /* -------------------------------------------------------------------------
     9. Form loading state helpers (shared across forms)
  -------------------------------------------------------------------------- */
  window.NAB.setFormLoading = function (btn, isLoading) {
    if (isLoading) {
      btn.classList.add('loading');
      btn.disabled = true;
      btn._originalText = btn.textContent;
      btn.textContent = '';
    } else {
      btn.classList.remove('loading');
      btn.disabled = false;
      if (btn._originalText) btn.textContent = btn._originalText;
    }
  };

  window.NAB.showFormAlert = function (form, type, message) {
    let alert = form.querySelector('.form-alert');
    if (!alert) {
      alert = document.createElement('div');
      alert.className = 'form-alert';
      alert.setAttribute('role', 'alert');
      form.appendChild(alert);
    }
    alert.className = 'form-alert visible ' + type;
    alert.textContent = message;
    alert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  window.NAB.hideFormAlert = function (form) {
    const alert = form.querySelector('.form-alert');
    if (alert) alert.className = 'form-alert';
  };

  /* Client-side validation helper */
  window.NAB.validateField = function (input) {
    const errorEl = input.parentElement
      ? input.parentElement.querySelector('.form-error')
      : null;
    let valid = true;
    let message = '';

    if (input.required && !input.value.trim()) {
      valid = false;
      message = 'This field is required.';
    } else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      valid = false;
      message = 'Please enter a valid email address.';
    }

    input.classList.toggle('error', !valid);

    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.toggle('visible', !valid);
    }

    return valid;
  };

  window.NAB.validateForm = function (form) {
    let isValid = true;
    form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach((input) => {
      if (!window.NAB.validateField(input)) isValid = false;
    });
    return isValid;
  };

  /* -------------------------------------------------------------------------
     10. Capture UTM parameters from URL
  -------------------------------------------------------------------------- */
  window.NAB.getUtmParams = function () {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source:   params.get('utm_source')   || null,
      utm_medium:   params.get('utm_medium')   || null,
      utm_campaign: params.get('utm_campaign') || null,
      utm_term:     params.get('utm_term')     || null,
      utm_content:  params.get('utm_content')  || null,
    };
  };

  /* Persist UTM params in sessionStorage so they survive redirects */
  (function persistUtm() {
    const utms = window.NAB.getUtmParams();
    const hasUtm = Object.values(utms).some(Boolean);
    if (hasUtm) {
      sessionStorage.setItem('nab_utm', JSON.stringify(utms));
    }
  })();

  /* Read UTM — prefers session-stored version (first touch) */
  window.NAB.getStoredUtm = function () {
    try {
      return JSON.parse(sessionStorage.getItem('nab_utm') || '{}');
    } catch (e) {
      return {};
    }
  };

  /* -------------------------------------------------------------------------
     Init
  -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initStickyNav();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initFaqAccordion();
    initLanguageSwitcher();
    markActivePage();
  });
})();
