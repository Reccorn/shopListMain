document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tabs-list__link').forEach(function (link) {
    link.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tabs-list__link').forEach(function (unactive) {
        unactive.classList.remove('tabs-list__link__active');
      });

      document.querySelectorAll('.products__slider').forEach(function (tabContent) {
        tabContent.classList.remove('products__slider__active');
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('tabs-list__link__active');
      document.querySelector(`[data-target="${path}"]`).classList.add('products__slider__active');
    });
  });
});