function slowScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      
      const offsetTop = element.offsetTop;
  
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
  
      return false;
    }
  }