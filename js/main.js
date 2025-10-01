// Small JS for mobile nav toggle and copy-email functionality

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var nav = document.getElementById('primary-nav');
      if (!nav) return;
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  });

  // Copy email button
  var copyButtons = document.querySelectorAll('#copy-email');
  copyButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var emailEl = document.getElementById('contact-email');
      if (!emailEl) return;
      // Obfuscated in markup: "markocpc9 [at] gmail [dot] com"
      var email = 'markocpc9@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () {
          var prev = btn.textContent;
          btn.textContent = 'Copied';
          setTimeout(function () { btn.textContent = prev; }, 2000);
        }).catch(function () {
          alert('Email: ' + email);
        });
      } else {
        // Fallback for older browsers
        alert('Email: ' + email);
      }
    });
  });

  // Accessibility: allow closing nav with Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var nav = document.getElementById('primary-nav');
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        document.querySelectorAll('.nav-toggle').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
      }
    }
  });
});

// Note: We avoid mailto: links to comply with assignment and reduce spam; copying to clipboard is a safer alternative.
