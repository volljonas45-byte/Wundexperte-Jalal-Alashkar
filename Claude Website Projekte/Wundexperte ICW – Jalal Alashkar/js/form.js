/* ============================================================
   CONTACT FORM — validation, submit, success state
   ============================================================ */

(function () {
  'use strict';

  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('[type="submit"]');
  const formWrapper = document.getElementById('form-wrapper');
  const successMsg = document.getElementById('form-success');
  const liveRegion = document.getElementById('form-live-region');

  // ── Field validators ──
  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  }

  function validateField(field) {
    const group = field.closest('.form-group') || field.closest('.form-check-group');
    const errorEl = group ? group.querySelector('.form-error') : null;
    let errorMsg = '';

    if (field.type === 'checkbox') {
      if (!field.checked) {
        errorMsg = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
      }
    } else if (field.required && !field.value.trim()) {
      errorMsg = 'Dieses Feld ist erforderlich.';
    } else if (field.type === 'email' && field.value.trim() && !isValidEmail(field.value)) {
      errorMsg = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    } else if (field.tagName === 'SELECT' && field.required && field.value === '') {
      errorMsg = 'Bitte wählen Sie eine Option aus.';
    }

    const isError = errorMsg !== '';

    if (errorEl) {
      errorEl.textContent = errorMsg;
      errorEl.classList.toggle('is-visible', isError);
    }

    field.classList.toggle('is-error', isError);
    field.setAttribute('aria-invalid', isError ? 'true' : 'false');

    return !isError;
  }

  // ── Validate all required fields ──
  function validateAll() {
    const fields = form.querySelectorAll('input[required], select[required], textarea[required], input[type="checkbox"][required]');
    let allValid = true;
    fields.forEach(function (f) {
      if (!validateField(f)) allValid = false;
    });
    return allValid;
  }

  // ── Enable/disable submit based on required fields ──
  function updateSubmitState() {
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    const checkbox = form.querySelector('input[type="checkbox"][required]');
    let filled = true;

    fields.forEach(function (f) {
      if (f.tagName === 'SELECT') {
        if (!f.value) filled = false;
      } else if (!f.value.trim()) {
        filled = false;
      }
    });

    if (checkbox && !checkbox.checked) filled = false;

    submitBtn.disabled = !filled;
  }

  // ── Attach blur validation ──
  const allInputs = form.querySelectorAll('input, select, textarea');
  allInputs.forEach(function (field) {
    field.addEventListener('blur', function () {
      if (field.required || (field.type === 'email' && field.value.trim())) {
        validateField(field);
      }
    });

    field.addEventListener('input', updateSubmitState);
    field.addEventListener('change', updateSubmitState);
  });

  updateSubmitState(); // Initial state

  // ── Submit handler ──
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const isValid = validateAll();
    if (!isValid) {
      // Focus first error field
      const firstError = form.querySelector('.is-error');
      if (firstError) firstError.focus();

      if (liveRegion) {
        liveRegion.textContent = 'Bitte überprüfen Sie Ihre Angaben. Einige Felder sind nicht korrekt ausgefüllt.';
      }
      return;
    }

    // Simulate successful send (replace with real fetch/FormData for production)
    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet…';

    // Collect form data (for future backend integration)
    // const data = new FormData(form);

    // Simulate async send
    setTimeout(function () {
      if (formWrapper) formWrapper.style.display = 'none';
      if (successMsg) {
        successMsg.classList.add('is-visible');
        successMsg.focus();
      }
      if (liveRegion) {
        liveRegion.textContent = 'Vielen Dank! Wir melden uns so schnell wie möglich bei Ihnen.';
      }
    }, 800);
  });

  // ── Prefill Anliegen select from URL param ──
  // e.g. kontakt.html?anliegen=Kooperationsanfrage
  const params = new URLSearchParams(window.location.search);
  const anliegenParam = params.get('anliegen');
  if (anliegenParam) {
    const select = form.querySelector('#anliegen');
    if (select) {
      const option = Array.from(select.options).find(function (o) {
        return o.value === anliegenParam || o.text === anliegenParam;
      });
      if (option) {
        select.value = option.value;
        updateSubmitState();
      }
    }
  }

})();
