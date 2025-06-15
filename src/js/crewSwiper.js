import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let crewSwiper = null;

function initCrewSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !crewSwiper) {
    crewSwiper = new Swiper('.crew-swiper', {
      spaceBetween: 22,
      slidesPerView: 'auto',
      mousewheel: true,
      centeredSlides: true,
      loop: true,
    });
  }

  if (!isMobile && crewSwiper) {
    crewSwiper.destroy(true, true);
    crewSwiper = null;
  }
}

window.addEventListener('load', initCrewSwiper);
window.addEventListener('resize', initCrewSwiper);
