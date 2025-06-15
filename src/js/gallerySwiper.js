import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


document.addEventListener('DOMContentLoaded', () => {
  const gallerySwiper = new Swiper('.gallery-swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    mousewheel: true,
    breakpoints: {
      1200: {
        slidesPerView: 3.45,
        initialSlide: 2,
      },
    },
  });
})