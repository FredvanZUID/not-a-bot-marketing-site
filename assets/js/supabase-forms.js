/**
 * not-a-bot.ai — Supabase Forms Integration
 * Version: 1.0.0 | 2026-05-08
 *
 * Handles all form submissions to Supabase:
 *   - submitLead()        → nab_leads        (ROI calculator leads)
 *   - submitMql()         → nab_mqls          (free trial / demo preview)
 *   - submitDemoRequest() → nab_demo_requests (personal demo SQL)
 *
 * Requires: @supabase/supabase-js v2 via CDN (loaded before this file)
 * Requires: main.js (window.NAB helpers)
 */

(function () {
  'use strict';

  /* -------------------------------------------------------------------------
     Supabase Client Initialisation
  -------------------------------------------------------------------------- */
  const SUPABASE_URL = 'https://xzjzhssmoiugiorsnwuf.supabase.co';
  const SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6anpoc3Ntb2l1Z2lvcnNud3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwMTM0NDEsImV4cCI6MjA5MjU4OTQ0MX0.oSINpm4DqabA60cRaOT00LOHSB4vlylXfa1iEwHHdUI';

  let _supabase = null;

  function getClient() {
    if (_supabase) return _supabase;

    if (typeof window.supabase === 'undefined' || typeof window.supabase.createClient !== 'function') {
      console.error('[NAB] Supabase JS not loaded. Make sure the CDN script is included before supabase-forms.js.');
      return null;
    }

    _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return _supabase;
  }

  /* -------------------------------------------------------------------------
     Helpers
  -------------------------------------------------------------------------- */

  /** Merge UTM params into a data object */
  function withUtm(data) {
    const utm = (window.NAB && window.NAB.getStoredUtm) ? window.NAB.getStoredUtm() : {};
    return Object.assign({}, data, utm);
  }

  /** Timestamp helper */
  function now() {
    return new Date().toISOString();
  }

  /* -------------------------------------------------------------------------
     Public API
  -------------------------------------------------------------------------- */

  /**
   * submitLead — saves a ROI calculator lead to nab_leads
   * @param {Object} data
   *   - name: string
   *   - email: string
   *   - company: string
   *   - company_type: string
   *   - phone: string (optional)
   *   - roi_hours_saved: number
   *   - roi_cost_saved: number
   *   - roi_percent: number
   *   - roi_payback_days: number
   *   - monthly_questions: number
   *   - minutes_per_question: number
   *   - hourly_rate: number
   * @returns {Promise<{success: boolean, error: string|null}>}
   */
  async function submitLead(data) {
    const client = getClient();
    if (!client) return { success: false, error: 'Service unavailable. Please try again later.' };

    const payload = withUtm({
      name:                 data.name || null,
      email:                data.email || null,
      company:              data.company || null,
      company_type:         data.company_type || null,
      phone:                data.phone || null,
      roi_hours_saved:      data.roi_hours_saved || null,
      roi_cost_saved:       data.roi_cost_saved || null,
      roi_percent:          data.roi_percent || null,
      roi_payback_days:     data.roi_payback_days || null,
      monthly_questions:    data.monthly_questions || null,
      minutes_per_question: data.minutes_per_question || null,
      hourly_rate:          data.hourly_rate || null,
      page_url:             window.location.href,
      created_at:           now(),
    });

    const { error } = await client.from('nab_leads').insert([payload]);

    if (error) {
      console.error('[NAB] submitLead error:', error);
      return { success: false, error: _friendlyError(error) };
    }

    return { success: true, error: null };
  }

  /**
   * submitMql — saves a free trial or demo preview request to nab_mqls
   * @param {Object} data
   *   - name: string
   *   - email: string
   *   - company: string
   *   - company_type: string
   *   - phone: string (optional)
   *   - plan_interest: 'basic' | 'advanced' | 'enterprise' (optional)
   *   - source: 'free_trial' | 'demo_preview' (optional)
   * @returns {Promise<{success: boolean, error: string|null}>}
   */
  async function submitMql(data) {
    const client = getClient();
    if (!client) return { success: false, error: 'Service unavailable. Please try again later.' };

    const payload = withUtm({
      name:          data.name || null,
      email:         data.email || null,
      company:       data.company || null,
      company_type:  data.company_type || null,
      phone:         data.phone || null,
      plan_interest: data.plan_interest || null,
      source:        data.source || 'free_trial',
      page_url:      window.location.href,
      created_at:    now(),
    });

    const { error } = await client.from('nab_mqls').insert([payload]);

    if (error) {
      console.error('[NAB] submitMql error:', error);
      return { success: false, error: _friendlyError(error) };
    }

    return { success: true, error: null };
  }

  /**
   * submitDemoRequest — saves a personal demo booking to nab_demo_requests
   * @param {Object} data
   *   - name: string
   *   - email: string
   *   - company: string
   *   - company_size: string
   *   - phone: string (optional)
   *   - use_case: string (optional)
   *   - current_tools: string (optional)
   *   - preferred_date: string ISO date (optional)
   * @returns {Promise<{success: boolean, error: string|null}>}
   */
  async function submitDemoRequest(data) {
    const client = getClient();
    if (!client) return { success: false, error: 'Service unavailable. Please try again later.' };

    const payload = withUtm({
      name:           data.name || null,
      email:          data.email || null,
      company:        data.company || null,
      company_size:   data.company_size || null,
      phone:          data.phone || null,
      use_case:       data.use_case || null,
      current_tools:  data.current_tools || null,
      preferred_date: data.preferred_date || null,
      page_url:       window.location.href,
      created_at:     now(),
    });

    const { error } = await client.from('nab_demo_requests').insert([payload]);

    if (error) {
      console.error('[NAB] submitDemoRequest error:', error);
      return { success: false, error: _friendlyError(error) };
    }

    return { success: true, error: null };
  }

  /* -------------------------------------------------------------------------
     Error message mapping
  -------------------------------------------------------------------------- */
  function _friendlyError(error) {
    if (!error) return 'An unknown error occurred.';
    const msg = error.message || '';

    if (msg.includes('duplicate') || msg.includes('unique')) {
      return 'This email address has already been registered. Check your inbox!';
    }
    if (msg.includes('network') || msg.includes('fetch')) {
      return 'Network error. Please check your internet connection and try again.';
    }
    if (msg.includes('invalid') && msg.includes('email')) {
      return 'Please enter a valid email address.';
    }
    return 'Something went wrong. Please try again or contact us directly.';
  }

  /* -------------------------------------------------------------------------
     Form Binders — attach Supabase submit to specific forms on the page
  -------------------------------------------------------------------------- */

  /** Bind the ROI lead capture form */
  function bindLeadForm(formEl, onSuccess) {
    if (!formEl) return;

    formEl.addEventListener('submit', async function (e) {
      e.preventDefault();

      if (!window.NAB || !window.NAB.validateForm(formEl)) return;

      const btn = formEl.querySelector('[type="submit"]');
      window.NAB && window.NAB.setFormLoading(btn, true);
      window.NAB && window.NAB.hideFormAlert(formEl);

      const data = {
        name:         formEl.querySelector('[name="name"]')?.value.trim(),
        email:        formEl.querySelector('[name="email"]')?.value.trim(),
        company:      formEl.querySelector('[name="company"]')?.value.trim(),
        company_type: formEl.querySelector('[name="company_type"]')?.value,
        phone:        formEl.querySelector('[name="phone"]')?.value.trim(),
        // ROI values are injected by roi-calculator.js via hidden fields
        roi_hours_saved:      parseFloat(formEl.querySelector('[name="roi_hours_saved"]')?.value) || null,
        roi_cost_saved:       parseFloat(formEl.querySelector('[name="roi_cost_saved"]')?.value) || null,
        roi_percent:          parseFloat(formEl.querySelector('[name="roi_percent"]')?.value) || null,
        roi_payback_days:     parseFloat(formEl.querySelector('[name="roi_payback_days"]')?.value) || null,
        monthly_questions:    parseFloat(formEl.querySelector('[name="monthly_questions"]')?.value) || null,
        minutes_per_question: parseFloat(formEl.querySelector('[name="minutes_per_question"]')?.value) || null,
        hourly_rate:          parseFloat(formEl.querySelector('[name="hourly_rate"]')?.value) || null,
      };

      const result = await submitLead(data);
      window.NAB && window.NAB.setFormLoading(btn, false);

      if (result.success) {
        window.NAB && window.NAB.showFormAlert(formEl, 'success',
          'Thank you! We will send your personalised ROI report by email shortly.');
        formEl.reset();
        if (typeof onSuccess === 'function') onSuccess(data);
      } else {
        window.NAB && window.NAB.showFormAlert(formEl, 'error', result.error);
      }
    });
  }

  /** Bind the free trial / MQL form */
  function bindMqlForm(formEl, onSuccess) {
    if (!formEl) return;

    formEl.addEventListener('submit', async function (e) {
      e.preventDefault();

      if (!window.NAB || !window.NAB.validateForm(formEl)) return;

      const btn = formEl.querySelector('[type="submit"]');
      window.NAB && window.NAB.setFormLoading(btn, true);
      window.NAB && window.NAB.hideFormAlert(formEl);

      const data = {
        name:          formEl.querySelector('[name="name"]')?.value.trim(),
        email:         formEl.querySelector('[name="email"]')?.value.trim(),
        company:       formEl.querySelector('[name="company"]')?.value.trim(),
        company_type:  formEl.querySelector('[name="company_type"]')?.value,
        phone:         formEl.querySelector('[name="phone"]')?.value.trim(),
        plan_interest: formEl.querySelector('[name="plan_interest"]')?.value,
        source:        formEl.getAttribute('data-source') || 'free_trial',
      };

      const result = await submitMql(data);
      window.NAB && window.NAB.setFormLoading(btn, false);

      if (result.success) {
        window.NAB && window.NAB.showFormAlert(formEl, 'success',
          'Your free trial has been activated! Check your email for the next steps.');
        formEl.reset();
        if (typeof onSuccess === 'function') onSuccess(data);
      } else {
        window.NAB && window.NAB.showFormAlert(formEl, 'error', result.error);
      }
    });
  }

  /** Bind the demo request form */
  function bindDemoForm(formEl, onSuccess) {
    if (!formEl) return;

    formEl.addEventListener('submit', async function (e) {
      e.preventDefault();

      if (!window.NAB || !window.NAB.validateForm(formEl)) return;

      const btn = formEl.querySelector('[type="submit"]');
      window.NAB && window.NAB.setFormLoading(btn, true);
      window.NAB && window.NAB.hideFormAlert(formEl);

      const data = {
        name:           formEl.querySelector('[name="name"]')?.value.trim(),
        email:          formEl.querySelector('[name="email"]')?.value.trim(),
        company:        formEl.querySelector('[name="company"]')?.value.trim(),
        company_size:   formEl.querySelector('[name="company_size"]')?.value,
        phone:          formEl.querySelector('[name="phone"]')?.value.trim(),
        use_case:       formEl.querySelector('[name="use_case"]')?.value.trim(),
        current_tools:  formEl.querySelector('[name="current_tools"]')?.value.trim(),
        preferred_date: formEl.querySelector('[name="preferred_date"]')?.value,
      };

      const result = await submitDemoRequest(data);
      window.NAB && window.NAB.setFormLoading(btn, false);

      if (result.success) {
        window.NAB && window.NAB.showFormAlert(formEl, 'success',
          'Demo request received! We will contact you within 24 hours to confirm your slot.');
        formEl.reset();
        if (typeof onSuccess === 'function') onSuccess(data);
      } else {
        window.NAB && window.NAB.showFormAlert(formEl, 'error', result.error);
      }
    });
  }

  /* -------------------------------------------------------------------------
     Auto-bind forms on DOMContentLoaded
  -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    bindLeadForm(document.querySelector('[data-form="lead"]'));
    bindMqlForm(document.querySelector('[data-form="mql"]'));
    bindDemoForm(document.querySelector('[data-form="demo"]'));
  });

  /* -------------------------------------------------------------------------
     Export to window.NAB
  -------------------------------------------------------------------------- */
  window.NAB = window.NAB || {};
  window.NAB.supabase = {
    submitLead,
    submitMql,
    submitDemoRequest,
    bindLeadForm,
    bindMqlForm,
    bindDemoForm,
  };
})();
