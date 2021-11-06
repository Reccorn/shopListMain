document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.header-middle__burger');
  const burgerMenu = document.querySelector('.burger-menu');

  document.addEventListener('click', function (event) {
    if (event.target === burgerBtn) {
      burgerMenu.classList.add('burger-menu__active');
    } else if (event.target.classList.contains('drop-list__button')) {
      toggleDropList(event.target);
    } else if (!event.target.classList.contains('burger-menu')) {
      burgerMenu.classList.remove('burger-menu__active');
    }
  });

  function toggleDropList(btn) {
    const dropList = btn.querySelector('.drop-list');
    const icon = btn.querySelector('.drop-list__icon');

    if (!btn.classList.contains('drop-list__button__active')) {
      btn.classList.add('drop-list__button__active');

      icon.classList.add('drop-list__icon__active');
      dropList.classList.add('drop-list__active');
    } else {
      btn.classList.remove('drop-list__button__active');

      icon.classList.remove('drop-list__icon__active');
      dropList.classList.remove('drop-list__active');
    }
  }
});