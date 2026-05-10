// Close mobile nav after a link click (Bootstrap collapse)
document.addEventListener('DOMContentLoaded', function () {
  var collapseEl = document.getElementById('oxiNavCollapse');
  if (!collapseEl) return;

  document.querySelectorAll('#oxiNavCollapse .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (collapseEl.classList.contains('show') && window.bootstrap) {
        var bsCollapse = bootstrap.Collapse.getInstance(collapseEl) || new bootstrap.Collapse(collapseEl, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
});

function filterPortfolio(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(function (button) { button.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.portfolio-item').forEach(function (item) {
    item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
  });
}

function toggleFaq(el) {
  var ans = el.nextElementSibling;
  el.classList.toggle('open');
  ans.classList.toggle('open');
}
