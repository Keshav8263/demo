var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
   loop:true,
   breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
  }
  });