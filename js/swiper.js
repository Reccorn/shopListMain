var swiperBanners = new Swiper(".top-row__main-banner", {
  spaceBetween: 15,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiperProducts = new Swiper(".products__slider", {
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1450: {
      slidesPerView: 5
    },
    1199: {
      slidesPerView: 4
    },
    981: {
      slidesPerView: 4
    },
    651: {
      slidesPerView: 3
    },
    395: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  }
});

var swiperBrands = new Swiper(".specials__slider__brands", {
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1450: {
      slidesPerView: 6
    },
    1199: {
      slidesPerView: 5
    },
    981: {
      slidesPerView: 4
    },
    551: {
      slidesPerView: 3
    },
    396: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  }
});

var swiperBlogs = new Swiper(".blogs__slider", {
  spaceBetween: 20,
  loop: false,
  speed: 800,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1199: {
      slidesPerView: 4
    },
    981: {
      slidesPerView: 3
    },
    491: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  }

});