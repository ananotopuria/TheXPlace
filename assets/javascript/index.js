import { initStickyObserver } from "./stickyObserver.js";
import { testimonialSlider } from "./slider.js";

initStickyObserver(".point");

const slider = document.querySelector('.companies__slider');

slider.addEventListener('animationiteration', () => {
  const firstImage = slider.querySelector('img:first-child');
  slider.appendChild(firstImage.cloneNode(true));
  slider.removeChild(firstImage);
});
testimonialSlider();