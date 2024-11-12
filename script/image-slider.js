$(document).ready(function () {
  let currentIndex = 0;
  const slides = $(".slider .slide");
  const totalSlides = slides.length;

  function moveToSlide(index) {
    const slideWidth = $(".slider-container").width();
    $(".slider").css("transform", "translateX(" + -index * slideWidth + "px)");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    moveToSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    moveToSlide(currentIndex);
  }

  setInterval(nextSlide, 10000);

  $(".next").click(function () {
    nextSlide();
  });

  $(".prev").click(function () {
    prevSlide();
  });

  $(window).resize(function () {
    moveToSlide(currentIndex);
  });
});
