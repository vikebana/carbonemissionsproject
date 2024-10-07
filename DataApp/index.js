window.addEventListener('scroll', function() {
    var button = document.getElementById('aboutButton');
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 25) {
      button.style.opacity = '0';
    } else {
      button.style.opacity = '1';
    }
  });