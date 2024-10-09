var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 600,
    stretch: 300,
    depth: 520,
    modifier: 600,
    slideShadows: true
  },
  mousewheel: {
    thresholdDelta: 80
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
