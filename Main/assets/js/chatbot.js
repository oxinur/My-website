(function () {
  'use strict';

  var BASE = (function () {
    var s = document.currentScript;
    if (!s) return '';
    var src = s.getAttribute('src') || '';
    var i = src.lastIndexOf('assets/');
    return i >= 0 ? src.substring(0, i) : '';
  })();

  var KB = [
    {
      keys: ['hi', 'hello', 'hey', 'howdy', 'good morning', 'good afternoon', 'good evening'],
      reply: "Hi there! I'm Oxi, the Oxinur assistant. How can I help you today?",
      quick: ['See pricing', 'How long does it take?', 'Talk to a human']
    },
    {
      keys: ['price', 'pricing', 'cost', 'how much', 'rate', 'fee', 'budget', 'quote'],
      reply: "Here's our pricing (all + VAT):<br><br>" +
        "• <strong>Starter Website</strong> — £499<br>" +
        "• <strong>Professional Website</strong> — £899<br>" +
        "• <strong>E-Commerce Store</strong> — £1,299<br><br>" +
        "Custom projects are quoted individually. See full details on our " +
        "<a href=\"" + BASE + "pricing.html\">pricing page</a>.",
      quick: ['What\'s included?', 'How long does it take?', 'Get a quote']
    },
    {
      keys: ['starter', '£499', '499'],
      reply: "The <strong>Starter</strong> package (£499 +VAT) is perfect for small businesses needing a clean professional presence. " +
        "Includes a 5-page responsive website, contact form, and basic SEO. " +
        "<a href=\"" + BASE + "pricing.html\">See full details →</a>"
    },
    {
      keys: ['professional', '£899', '899'],
      reply: "The <strong>Professional</strong> package (£899 +VAT) is built on WordPress so you can edit it yourself. " +
        "Includes up to 10 pages, custom design, blog, advanced SEO, and analytics. " +
        "<a href=\"" + BASE + "pricing.html\">See full details →</a>"
    },
    {
      keys: ['ecommerce', 'e-commerce', 'shop', 'store', 'sell online', '£1,299', '1299'],
      reply: "Our <strong>E-Commerce</strong> store (£1,299 +VAT) gets you selling online with a full WooCommerce setup, " +
        "payment gateway, product catalog, and inventory management. " +
        "<a href=\"" + BASE + "pricing.html\">See full details →</a>"
    },
    {
      keys: ['how long', 'timeline', 'how fast', 'duration', 'when', 'turnaround', 'time frame', 'timeframe'],
      reply: "Most websites are completed within <strong>2–4 weeks</strong>. " +
        "E-commerce projects typically take <strong>3–6 weeks</strong>. " +
        "Timing depends on the package and how quickly you can provide content and feedback."
    },
    {
      keys: ['hosting', 'domain', 'host', 'server'],
      reply: "Hosting isn't included in the one-off price, but we offer reliable UK hosting from " +
        "<strong>£19.99/month</strong> — that includes security updates, backups, and ongoing support. " +
        "We can also help you register a domain."
    },
    {
      keys: ['wordpress', 'cms', 'edit myself', 'update myself', 'content management'],
      reply: "Yes — all <strong>Professional</strong> and <strong>E-Commerce</strong> sites are built on WordPress " +
        "with a friendly editor, so you can update text, images, and pages without any technical knowledge."
    },
    {
      keys: ['service', 'what do you do', 'what do you offer', 'offer'],
      reply: "We design and build professional websites for businesses across the UK. Our main services are:<br><br>" +
        "• Business websites (Starter & Professional)<br>" +
        "• E-commerce stores<br>" +
        "• Custom / bespoke projects<br><br>" +
        "<a href=\"" + BASE + "services.html\">See all services →</a>",
      quick: ['See pricing', 'See portfolio', 'Talk to a human']
    },
    {
      keys: ['portfolio', 'examples', 'previous work', 'past work', 'samples', 'showcase'],
      reply: "You can see examples of our recent work on our " +
        "<a href=\"" + BASE + "portfolio.html\">portfolio page</a>. We've worked with businesses across retail, hospitality, professional services, and more."
    },
    {
      keys: ['contact', 'phone', 'call', 'email', 'reach', 'get in touch', 'speak to someone', 'human', 'person', 'support'],
      reply: "You can reach us directly:<br><br>" +
        "📧 <a href=\"mailto:oxinur22@gmail.com\">oxinur22@gmail.com</a><br>" +
        "📞 <a href=\"tel:+447466272238\">+44 7466 272238</a><br>" +
        "📍 United Kingdom<br><br>" +
        "Or fill in the <a href=\"" + BASE + "contact.html\">contact form</a> — we reply within 24 hours.",
      quick: ['Get a quote', 'See pricing']
    },
    {
      keys: ['quote', 'estimate', 'get a quote', 'free quote'],
      reply: "Happy to help! Head to our <a href=\"" + BASE + "contact.html\">contact page</a> and tell us about your project — " +
        "we'll come back to you within 24 hours with a free, no-obligation quote."
    },
    {
      keys: ['location', 'where', 'based', 'country', 'uk', 'office'],
      reply: "We're based in the <strong>United Kingdom</strong> 🇬🇧 and work with clients across the UK and beyond — everything is delivered remotely."
    },
    {
      keys: ['response time', 'reply', 'how quickly', 'how fast reply', 'fast'],
      reply: "We reply to every enquiry within <strong>24 hours</strong>, usually much sooner during UK working hours."
    },
    {
      keys: ['payment', 'pay', 'deposit', 'invoice', 'bank', 'card'],
      reply: "We typically take a 50% deposit to start, with the balance due on launch. We accept bank transfer and card payments. " +
        "All prices shown are <strong>+ VAT</strong>."
    },
    {
      keys: ['seo', 'google', 'rank', 'ranking', 'search engine'],
      reply: "All our websites include solid SEO foundations: clean code, fast load times, mobile-friendly design, " +
        "meta tags, and sitemap. The Professional package adds advanced on-page SEO and analytics."
    },
    {
      keys: ['mobile', 'responsive', 'phone friendly', 'tablet'],
      reply: "Every site we build is fully <strong>responsive</strong> — it looks and works great on phones, tablets, and desktops."
    },
    {
      keys: ['support', 'aftercare', 'maintenance', 'after launch'],
      reply: "We offer 30 days of free support after launch. After that, ongoing maintenance is available as part of our hosting plans (£19.99/month)."
    },
    {
      keys: ['revision', 'changes', 'edits', 'amendments'],
      reply: "All packages include rounds of revisions during the design and build phase, so we can refine the look until you're happy with it."
    },
    {
      keys: ['logo', 'branding', 'brand'],
      reply: "We don't focus on full brand identity, but we can recommend trusted partners. " +
        "If you already have a logo and brand colours, we'll integrate them into your site beautifully."
    },
    {
      keys: ['thanks', 'thank you', 'cheers', 'thx', 'ty'],
      reply: "You're welcome! Anything else I can help with?",
      quick: ['See pricing', 'Talk to a human']
    },
    {
      keys: ['bye', 'goodbye', 'see you', 'cya', 'later'],
      reply: "Thanks for stopping by! Have a great day — and feel free to <a href=\"" + BASE + "contact.html\">drop us a line</a> any time."
    }
  ];

  var FALLBACK = "I'm not sure I caught that — but a human can definitely help. " +
    "You can <a href=\"" + BASE + "contact.html\">send us a message</a> or email " +
    "<a href=\"mailto:oxinur22@gmail.com\">oxinur22@gmail.com</a>. " +
    "Or pick a topic below 👇";

  var FALLBACK_QUICK = ['See pricing', 'Services', 'Talk to a human'];

  function findReply(text) {
    var t = (text || '').toLowerCase().trim();
    if (!t) return null;
    var best = null;
    var bestScore = 0;
    for (var i = 0; i < KB.length; i++) {
      var entry = KB[i];
      for (var j = 0; j < entry.keys.length; j++) {
        var k = entry.keys[j];
        if (t.indexOf(k) !== -1 && k.length > bestScore) {
          best = entry;
          bestScore = k.length;
        }
      }
    }
    return best;
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function buildWidget() {
    var launcher = el('button', 'oxi-chat-launcher');
    launcher.setAttribute('aria-label', 'Open chat');
    launcher.innerHTML =
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      '<path d="M12 2C6.48 2 2 5.94 2 10.5c0 2.3 1.13 4.38 2.97 5.88L4 22l5.5-2.36c.79.16 1.63.24 2.5.24 5.52 0 10-3.94 10-8.5S17.52 2 12 2z"/>' +
      '</svg>' +
      '<span class="oxi-badge">1</span>';

    var win = el('div', 'oxi-chat-window');
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', 'Oxinur chat');

    var header = el('div', 'oxi-chat-header');
    header.innerHTML =
      '<div class="oxi-avatar">O</div>' +
      '<div>' +
        '<div class="oxi-title">Oxinur Assistant</div>' +
        '<div class="oxi-subtitle"><span class="oxi-status-dot"></span>Typically replies in seconds</div>' +
      '</div>' +
      '<button class="oxi-close" aria-label="Close chat">' +
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">' +
        '<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>' +
        '</svg>' +
      '</button>';

    var body = el('div', 'oxi-chat-body');

    var footer = el('div', 'oxi-chat-footer');
    footer.innerHTML =
      '<input type="text" class="oxi-input" placeholder="Type your message…" aria-label="Type your message" />' +
      '<button class="oxi-send" aria-label="Send">' +
        '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
        '<path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/>' +
        '</svg>' +
      '</button>';

    var brand = el('div', 'oxi-chat-branding', 'Powered by Oxinur');

    win.appendChild(header);
    win.appendChild(body);
    win.appendChild(footer);
    win.appendChild(brand);

    document.body.appendChild(launcher);
    document.body.appendChild(win);

    return { launcher: launcher, win: win, body: body, input: footer.querySelector('.oxi-input'), send: footer.querySelector('.oxi-send'), close: header.querySelector('.oxi-close') };
  }

  function scrollDown(body) {
    body.scrollTop = body.scrollHeight;
  }

  function addMessage(body, text, who) {
    var msg = el('div', 'oxi-msg ' + who, text);
    body.appendChild(msg);
    scrollDown(body);
    return msg;
  }

  function addTyping(body) {
    var t = el('div', 'oxi-typing');
    t.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(t);
    scrollDown(body);
    return t;
  }

  function addQuickReplies(body, labels, onPick) {
    if (!labels || !labels.length) return;
    var wrap = el('div', 'oxi-quick-replies');
    labels.forEach(function (label) {
      var b = el('button', null, label);
      b.addEventListener('click', function () {
        wrap.remove();
        onPick(label);
      });
      wrap.appendChild(b);
    });
    body.appendChild(wrap);
    scrollDown(body);
  }

  function init() {
    if (document.getElementById('oxi-chat-init')) return;
    var marker = el('meta');
    marker.id = 'oxi-chat-init';
    document.head.appendChild(marker);

    var ui = buildWidget();
    var greeted = false;

    function open() {
      ui.win.classList.add('is-open');
      ui.launcher.classList.add('is-open');
      ui.launcher.setAttribute('aria-label', 'Close chat');
      setTimeout(function () { ui.input.focus(); }, 100);
      if (!greeted) {
        greeted = true;
        setTimeout(function () { greet(); }, 250);
      }
    }
    function close() {
      ui.win.classList.remove('is-open');
      ui.launcher.classList.remove('is-open');
      ui.launcher.setAttribute('aria-label', 'Open chat');
    }

    ui.launcher.addEventListener('click', function () {
      if (ui.win.classList.contains('is-open')) close(); else open();
    });
    ui.close.addEventListener('click', close);

    function respond(text) {
      var typing = addTyping(ui.body);
      setTimeout(function () {
        typing.remove();
        var match = findReply(text);
        if (match) {
          addMessage(ui.body, match.reply, 'bot');
          if (match.quick) addQuickReplies(ui.body, match.quick, handleUser);
        } else {
          addMessage(ui.body, FALLBACK, 'bot');
          addQuickReplies(ui.body, FALLBACK_QUICK, handleUser);
        }
      }, 600 + Math.random() * 400);
    }

    function handleUser(text) {
      text = (text || '').trim();
      if (!text) return;
      addMessage(ui.body, text.replace(/</g, '&lt;'), 'user');
      respond(text);
    }

    function greet() {
      var typing = addTyping(ui.body);
      setTimeout(function () {
        typing.remove();
        addMessage(ui.body, "👋 Hi! I'm Oxi, the Oxinur assistant. I can answer questions about pricing, services, timelines, and more. What would you like to know?", 'bot');
        addQuickReplies(ui.body, ['See pricing', 'How long does it take?', 'See services', 'Talk to a human'], handleUser);
      }, 500);
    }

    function submit() {
      var text = ui.input.value;
      if (!text.trim()) return;
      ui.input.value = '';
      handleUser(text);
    }

    ui.send.addEventListener('click', submit);
    ui.input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); submit(); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
