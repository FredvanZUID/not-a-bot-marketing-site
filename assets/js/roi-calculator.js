/**
 * not-a-bot.ai — ROI Calculator
 * Version: 1.0.0 | 2026-05-08
 *
 * Inputs:
 *   - Monthly customer questions (slider: 50–5000)
 *   - Average minutes per manual response (slider: 5–30)
 *   - Average employee hourly rate in € (slider: 15–60)
 *   - Business type (dropdown)
 *
 * Calculation:
 *   Hours saved/month  = (questions × minutes / 60) × 0.80
 *   Cost saved/month   = hours saved × hourly rate
 *   ROI %              = (cost saved - €19) / €19 × 100
 *   Payback days       = ceil(19 / (cost saved / 30))
 *
 * Output: animated counters, hidden form fields populated for Supabase.
 */

(function () {
  'use strict';

  /* Plan cost for ROI calculation */
  const PLAN_COST = 19; // Basic plan €/month
  const AUTOMATION_RATE = 0.80; // 80% of questions automated

  /* -------------------------------------------------------------------------
     DOM references
  -------------------------------------------------------------------------- */
  const calc = {
    form:            document.getElementById('roi-form'),
    sliderQuestions: document.getElementById('roi-questions'),
    sliderMinutes:   document.getElementById('roi-minutes'),
    sliderRate:      document.getElementById('roi-rate'),
    selectType:      document.getElementById('roi-type'),

    valQuestions:    document.getElementById('roi-val-questions'),
    valMinutes:      document.getElementById('roi-val-minutes'),
    valRate:         document.getElementById('roi-val-rate'),

    resultHours:     document.getElementById('result-hours'),
    resultCost:      document.getElementById('result-cost'),
    resultRoi:       document.getElementById('result-roi'),
    resultPayback:   document.getElementById('result-payback'),

    resultSection:   document.getElementById('roi-results'),
    leadSection:     document.getElementById('roi-lead-section'),

    // Hidden fields for form submission
    hiddenHours:     document.getElementById('h-hours'),
    hiddenCost:      document.getElementById('h-cost'),
    hiddenRoi:       document.getElementById('h-roi'),
    hiddenPayback:   document.getElementById('h-payback'),
    hiddenQuestions: document.getElementById('h-questions'),
    hiddenMinutes:   document.getElementById('h-minutes'),
    hiddenRate:      document.getElementById('h-rate'),
  };

  /* -------------------------------------------------------------------------
     Check if calculator is present on page
  -------------------------------------------------------------------------- */
  if (!calc.sliderQuestions) return;

  /* -------------------------------------------------------------------------
     State
  -------------------------------------------------------------------------- */
  let state = {
    questions: parseInt(calc.sliderQuestions.value) || 500,
    minutes:   parseInt(calc.sliderMinutes.value) || 10,
    rate:      parseInt(calc.sliderRate.value) || 30,
    type:      calc.selectType ? calc.selectType.value : 'overig',
    results: {
      hoursSaved:   0,
      costSaved:    0,
      roi:          0,
      paybackDays:  0,
    },
  };

  let resultsAnimated = false;

  /* -------------------------------------------------------------------------
     Update display values for sliders
  -------------------------------------------------------------------------- */
  function updateDisplayValues() {
    if (calc.valQuestions) {
      calc.valQuestions.textContent = state.questions.toLocaleString('nl-NL');
    }
    if (calc.valMinutes) {
      calc.valMinutes.textContent = state.minutes + ' min';
    }
    if (calc.valRate) {
      calc.valRate.textContent = '€' + state.rate;
    }

    // Update slider fill background
    updateSliderFill(calc.sliderQuestions, 50, 5000);
    updateSliderFill(calc.sliderMinutes, 5, 30);
    updateSliderFill(calc.sliderRate, 15, 60);
  }

  function updateSliderFill(slider, min, max) {
    if (!slider) return;
    const pct = ((slider.value - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, var(--color-accent) ${pct}%, var(--color-border) ${pct}%)`;
  }

  /* -------------------------------------------------------------------------
     Core calculation
  -------------------------------------------------------------------------- */
  function calculate() {
    const { questions, minutes, rate } = state;

    const hoursSaved  = (questions * minutes / 60) * AUTOMATION_RATE;
    const costSaved   = hoursSaved * rate;
    const roi         = costSaved > 0 ? ((costSaved - PLAN_COST) / PLAN_COST) * 100 : 0;
    const paybackDays = costSaved > 0 ? Math.ceil(PLAN_COST / (costSaved / 30)) : 0;

    state.results = {
      hoursSaved:  Math.round(hoursSaved * 10) / 10,
      costSaved:   Math.round(costSaved),
      roi:         Math.round(roi),
      paybackDays: paybackDays,
    };

    return state.results;
  }

  /* -------------------------------------------------------------------------
     Display results
  -------------------------------------------------------------------------- */
  function displayResults(animate) {
    const { hoursSaved, costSaved, roi, paybackDays } = state.results;

    if (animate && window.NAB && window.NAB.animateCounter) {
      window.NAB.animateCounter(calc.resultHours,   hoursSaved,  ' hr',  900);
      window.NAB.animateCounter(calc.resultCost,    costSaved,   '',     900);
      window.NAB.animateCounter(calc.resultRoi,     roi,         '%',    900);
      window.NAB.animateCounter(calc.resultPayback, paybackDays, ' d',   900);
    } else {
      if (calc.resultHours)   calc.resultHours.textContent   = hoursSaved.toLocaleString('nl-NL') + ' hr';
      if (calc.resultCost)    calc.resultCost.textContent    = costSaved.toLocaleString('nl-NL');
      if (calc.resultRoi)     calc.resultRoi.textContent     = roi.toLocaleString('nl-NL') + '%';
      if (calc.resultPayback) calc.resultPayback.textContent = paybackDays + ' d';
    }

    // Populate hidden form fields
    if (calc.hiddenHours)     calc.hiddenHours.value     = hoursSaved;
    if (calc.hiddenCost)      calc.hiddenCost.value      = costSaved;
    if (calc.hiddenRoi)       calc.hiddenRoi.value       = roi;
    if (calc.hiddenPayback)   calc.hiddenPayback.value   = paybackDays;
    if (calc.hiddenQuestions) calc.hiddenQuestions.value = state.questions;
    if (calc.hiddenMinutes)   calc.hiddenMinutes.value   = state.minutes;
    if (calc.hiddenRate)      calc.hiddenRate.value      = state.rate;
  }

  /* -------------------------------------------------------------------------
     Show results section
  -------------------------------------------------------------------------- */
  function showResults() {
    if (calc.resultSection) {
      calc.resultSection.style.display = 'block';
      calc.resultSection.classList.add('fade-in', 'visible');
    }
    // Show lead capture form after a short delay
    if (calc.leadSection) {
      setTimeout(() => {
        calc.leadSection.style.display = 'block';
        calc.leadSection.classList.add('fade-in', 'visible');
      }, 600);
    }
  }

  /* -------------------------------------------------------------------------
     Event: Calculate button
  -------------------------------------------------------------------------- */
  const calcButton = document.getElementById('btn-calculate');
  if (calcButton) {
    calcButton.addEventListener('click', function () {
      calculate();
      if (!resultsAnimated) {
        showResults();
        displayResults(true);
        resultsAnimated = true;

        // Scroll to results
        if (calc.resultSection) {
          setTimeout(() => {
            calc.resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      } else {
        displayResults(true);
      }
    });
  }

  /* -------------------------------------------------------------------------
     Event: Slider inputs (live update display + recalculate if shown)
  -------------------------------------------------------------------------- */
  if (calc.sliderQuestions) {
    calc.sliderQuestions.addEventListener('input', function () {
      state.questions = parseInt(this.value);
      updateDisplayValues();
      if (resultsAnimated) { calculate(); displayResults(false); }
    });
  }

  if (calc.sliderMinutes) {
    calc.sliderMinutes.addEventListener('input', function () {
      state.minutes = parseInt(this.value);
      updateDisplayValues();
      if (resultsAnimated) { calculate(); displayResults(false); }
    });
  }

  if (calc.sliderRate) {
    calc.sliderRate.addEventListener('input', function () {
      state.rate = parseInt(this.value);
      updateDisplayValues();
      if (resultsAnimated) { calculate(); displayResults(false); }
    });
  }

  if (calc.selectType) {
    calc.selectType.addEventListener('change', function () {
      state.type = this.value;
    });
  }

  /* -------------------------------------------------------------------------
     Init: set initial display values
  -------------------------------------------------------------------------- */
  updateDisplayValues();

  /* Run an initial calculation so hidden fields are pre-populated */
  calculate();

  /* -------------------------------------------------------------------------
     NL locale helpers for the form on roi-calculator.html
  -------------------------------------------------------------------------- */
  // Bind lead form (Dutch success message override)
  document.addEventListener('DOMContentLoaded', function () {
    const leadForm = document.querySelector('[data-form="lead"]');
    if (!leadForm) return;

    // Override the default English success message with Dutch
    if (leadForm.getAttribute('data-lang') === 'nl') {
      leadForm.addEventListener('submit', function () {
        // The actual submission is handled by supabase-forms.js
        // We just need the success message to appear after
      });
    }
  });
})();
