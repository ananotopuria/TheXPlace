export function initStickyObserver(selector) {
  const sectionStickyEl = document.querySelector(selector);
  if (!sectionStickyEl) {
    console.error(`Element with selector "${selector}" not found.`);
    return;
  }

  let intersectingElementCount = 0;
  const obs = new IntersectionObserver(
    function (entries) {
      entries.forEach((ent) => {
        if (ent.isIntersecting) {
          intersectingElementCount++;
        } else {
          intersectingElementCount--;
        }
      });
      if (intersectingElementCount > 0) {
        document.body.classList.remove("sticky");
      } else {
        document.body.classList.add("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );

  obs.observe(sectionStickyEl);
}
