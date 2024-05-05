const handleNavigationCheckboxChange = () => {
    const checkbox = document.querySelector('.navigation__checkbox');
    const heroSection = document.querySelector('.hero');
  
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        heroSection.style.display = 'none';
      } else {
        heroSection.style.display = 'block';
      }
    });
  };
  
  export default handleNavigationCheckboxChange;