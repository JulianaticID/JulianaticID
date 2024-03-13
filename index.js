var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 100,
    stretch: 100,
    depth: 520,
    modifier: 2,
    slideShadows: true
  },
  mousewheel: {
    thresholdDelta: 700
  spaceBetween: 400,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
