import { initStickyObserver } from "./stickyObserver.js";
import { testimonialSlider } from "./slider.js";
import handleNavigationCheckboxChange from "./navigation.js";

document.addEventListener("DOMContentLoaded", function () {
  handleNavigationCheckboxChange();
});

initStickyObserver(".point");

const slider = document.querySelector(".companies__slider");

slider.addEventListener("animationiteration", () => {
  const firstImage = slider.querySelector("img:first-child");
  slider.appendChild(firstImage.cloneNode(true));
  slider.removeChild(firstImage);
});
testimonialSlider();
