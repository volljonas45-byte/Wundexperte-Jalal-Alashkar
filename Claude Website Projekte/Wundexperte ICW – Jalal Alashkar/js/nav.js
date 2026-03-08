/* ============================================================
   NAVIGATION — sticky header, hamburger, focus trap
   ============================================================ */

(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.nav-hamburger');
  const drawer = document.querySelector('.nav-drawer');
  const drawerLinks = drawer ? drawer.querySelectorAll('a, button') : [];

  // ── Sticky header shadow on scroll ──
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on load

  // ── Hamburger toggle ──
  function openDrawer() {
    drawer.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Menü schließen');
    // Focus first drawer item
    if (drawerLinks.length > 0) {
      drawerLinks[0].focus();
    }
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Menü öffnen');
    hamburger.focus();
  }

  function toggleDrawer() {
    const isOpen = drawer.classList.contains('is-open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  if (hamburger && drawer) {
    hamburger.addEventListener('click', toggleDrawer);

    // Close on link click
    drawerLinks.forEach(function (el) {
      if (el.tagName === 'A') {
        el.addEventListener('click', closeDrawer);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });

    // Focus trap inside drawer
    drawer.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab' || !drawer.classList.contains('is-open')) return;
      const focusable = Array.from(drawerLinks).filter(function (el) {
        return !el.hasAttribute('disabled') && el.offsetParent !== null;
      });
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (
        drawer.classList.contains('is-open') &&
        !drawer.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        closeDrawer();
      }
    });
  }

  // ── Set active nav link based on current page ──
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a, .nav-drawer a[href]');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPage = href.split('/').pop().split('#')[0] || 'index.html';
    if (linkPage === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });

})();
