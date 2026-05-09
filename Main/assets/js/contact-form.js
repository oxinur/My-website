(function () {
  var cfg = window.EMAILJS_CONFIG || {};
  var ready = false;

  if (typeof emailjs !== 'undefined' && cfg.publicKey && cfg.publicKey.indexOf('YOUR_') !== 0) {
    try {
      emailjs.init({ publicKey: cfg.publicKey });
      ready = true;
    } catch (e) {
      console.error('EmailJS init failed:', e);
    }
  }

  function showStatus(type, msg) {
    var el = document.getElementById('formStatus');
    if (!el) return;
    var bg = type === 'success' ? '#e8f5e8' : type === 'error' ? '#fde8e8' : '#f0eff0';
    var color = type === 'success' ? '#1b5e20' : type === 'error' ? '#8a1f1f' : '#2e2c2c';
    el.style.display = 'block';
    el.style.background = bg;
    el.style.color = color;
    el.innerHTML = msg;
  }

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  window.submitForm = function (event) {
    if (event) event.preventDefault();

    var firstName = val('firstName');
    var lastName  = val('lastName');
    var email     = val('email');
    var phone     = val('phone');
    var service   = val('service');
    var message   = val('message');

    if (!firstName || !lastName || !email || !service || !message) {
      showStatus('error', 'Please fill in all required fields.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showStatus('error', 'Please enter a valid email address.');
      return false;
    }

    var btn = document.getElementById('submitBtn');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

    if (!ready) {
      showStatus('error',
        'Email service is not configured yet. ' +
        'In the meantime, please email us directly at ' +
        '<a href="mailto:oxinur22@gmail.com" style="color:inherit;text-decoration:underline;">oxinur22@gmail.com</a>.');
      if (btn) { btn.disabled = false; btn.textContent = 'Send Message →'; }
      return false;
    }

    var fullName = firstName + ' ' + lastName;
    var params = {
      from_name: fullName,
      first_name: firstName,
      last_name: lastName,
      from_email: email,
      reply_to: email,
      email: email,
      user_email: email,
      phone: phone || 'Not provided',
      service: service,
      message: message,
      to_email: 'oxinur22@gmail.com'
    };

    var adminOk = false;
    var autoReplyOk = false;

    emailjs.send(cfg.serviceId, cfg.adminTemplateId, params)
      .then(function (res) {
        adminOk = true;
        console.log('[contact form] admin email sent:', res && res.status, res && res.text);
        return emailjs.send(cfg.serviceId, cfg.autoReplyTemplateId, params)
          .then(function (res2) {
            autoReplyOk = true;
            console.log('[contact form] auto-reply sent:', res2 && res2.status, res2 && res2.text);
          })
          .catch(function (err2) {
            console.error('[contact form] auto-reply FAILED:', err2);
          });
      })
      .then(function () {
        if (adminOk && autoReplyOk) {
          showStatus('success',
            '<strong>Thanks ' + firstName + '!</strong> Your message is on its way. ' +
            'We\'ve sent a confirmation to <strong>' + email + '</strong> (check your spam folder if you don\'t see it) and will reply within 24 hours.');
        } else if (adminOk) {
          showStatus('success',
            '<strong>Thanks ' + firstName + '!</strong> Your message has been received and we\'ll reply within 24 hours. ' +
            '(Heads-up: we couldn\'t send you the auto-confirmation — open browser console for details.)');
        }
        if (adminOk) {
          var form = document.getElementById('contactForm');
          if (form) form.reset();
        }
      })
      .catch(function (err) {
        console.error('[contact form] admin email FAILED:', err);
        showStatus('error',
          'Sorry — something went wrong sending your message. ' +
          'Please email us directly at ' +
          '<a href="mailto:oxinur22@gmail.com" style="color:inherit;text-decoration:underline;">oxinur22@gmail.com</a>. ' +
          '(Open the browser console — F12 — for the technical error.)');
      })
      .then(function () {
        if (btn) { btn.disabled = false; btn.textContent = 'Send Message →'; }
      });

    return false;
  };
})();
