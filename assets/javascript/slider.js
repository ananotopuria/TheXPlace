export const testimonialSlider = function () {
const slides = document.querySelectorAll(".testimonial__slider--slide");
const btnRight = document.querySelector(".testimonial__slider--btn-right");
const dots = document.querySelectorAll(".dots .dot");

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.opacity = i === slide ? 1 : 0;
  });
  
  // Update active dot
  dots.forEach((dot, index) => {
    dot.classList.toggle("active-dot", index === slide);
  });
};

const nextSlide = function () {
  curSlide = (curSlide + 1) % maxSlide;
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  }
});

// Initialize slider
goToSlide(curSlide);
}