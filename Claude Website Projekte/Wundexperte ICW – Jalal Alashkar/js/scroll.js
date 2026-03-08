/* ============================================================
   SCROLL — fade-in on scroll + accordion
   ============================================================ */

(function () {
  'use strict';

  // ── Fade-in on scroll (Intersection Observer) ──
  var fadeEls = document.querySelectorAll('[data-fade]');

  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    fadeEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ── Accordion ──
  var triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var expanded = trigger.getAttribute('aria-expanded') === 'true';
      var panelId = trigger.getAttribute('aria-controls');
      var panel = document.getElementById(panelId);

      // Close all others (one-open-at-a-time)
      triggers.forEach(function (t) {
        var pId = t.getAttribute('aria-controls');
        var p = document.getElementById(pId);
        t.setAttribute('aria-expanded', 'false');
        if (p) p.classList.remove('is-open');
      });

      // Toggle current
      if (!expanded) {
        trigger.setAttribute('aria-expanded', 'true');
        if (panel) panel.classList.add('is-open');
      }
    });

    // Keyboard: Enter/Space already handled by button, but ensure it works
    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger.click();
      }
    });
  });

})();
