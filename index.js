var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 100,
    stretch: 100,
    depth: 520,
    modifier: 60,
    slideShadows: true
  },
  mousewheel: {
    thresholdDelta: 200
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
