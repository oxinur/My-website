function toggleMobileNav(btn) {
  const links = document.querySelector('.nav-links');
  const open = links.classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
}

// Close mobile nav when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.querySelector('.nav-links').classList.remove('open');
      var btn = document.querySelector('.nav-hamburger');
      if (btn) { btn.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  });
});

function filterPortfolio(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach((button) => button.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.portfolio-item').forEach((item) => {
    item.style.display = cat === 'all' || item.dataset.cat === cat ? 'block' : 'none';
  });
}

function toggleFaq(el) {
  const ans = el.nextElementSibling;
  el.classList.toggle('open');
  ans.classList.toggle('open');
}

