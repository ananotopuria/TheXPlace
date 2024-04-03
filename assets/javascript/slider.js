
export const testimonialSlider = function () {
  const slides = document.querySelectorAll(".testimonial__slider--slide");
  const btnRights = document.querySelectorAll(".testimonial__slider--btn-right");

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.opacity = i === slide ? 1 : 0;
    });
  };

  const nextSlide = function () {
    curSlide = (curSlide + 1) % maxSlide;
    goToSlide(curSlide);
  };

  btnRights.forEach(function (btnRight) {
    btnRight.addEventListener("click", function () {
      nextSlide();
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      nextSlide();
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  testimonialSlider();
});
