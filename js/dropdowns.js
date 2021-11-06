document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('account-link')) {
      document.querySelector('.account-dropdown').classList.add('account-dropdown__active');
    } else if (!e.target.classList.contains('account-dropdown')) {
      document.querySelector('.account-dropdown').classList.remove('account-dropdown__active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-link')) {
      document.querySelector('.cart-dropdown').classList.add('cart-dropdown__active');
    } else if (!e.target.classList.contains('cart-dropdown')) {
      document.querySelector('.cart-dropdown').classList.remove('cart-dropdown__active');
    }
  });
});