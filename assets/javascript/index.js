import { initStickyObserver } from "./stickyObserver.js";

initStickyObserver(".point");


const slider = document.querySelector('.companies__slider');

slider.addEventListener('animationiteration', () => {
  const firstImage = slider.querySelector('img:first-child');
  slider.appendChild(firstImage.cloneNode(true));
  slider.removeChild(firstImage);
});