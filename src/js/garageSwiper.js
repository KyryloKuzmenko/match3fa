import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let garageSwiper = null;

function initGarageSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !garageSwiper) {
    garageSwiper = new Swiper('.garage-swiper', {
      spaceBetween: 12,
      slidesPerView: 1.4,
      mousewheel: true,
      // centeredSlides: true,
      loop: true,
    });
  }

  if (!isMobile && garageSwiper) {
    garageSwiper.destroy(true, true);
    garageSwiper = null;
  }
}

window.addEventListener('load', initGarageSwiper);
window.addEventListener('resize', initGarageSwiper);
