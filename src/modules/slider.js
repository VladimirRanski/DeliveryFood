import Swiper, { Navigation, Pagination } from 'swiper';

export const slider = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
}

