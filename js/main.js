jQuery(document).ready(function($) {
  
  //slider
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  const moreads = new Swiper('[data-moreads]', {
    slidesPerView: 7,
    freeMode: true,
  });
  const wheelSlide = new Swiper('[data-selectsSlide]', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 10,
    initialSlide : 2,
    grid: {
      rows: 2,
      fill: 'row',
    },
  });
  //adaptive
  if ($(window).width() < 994) {
    
  }

})