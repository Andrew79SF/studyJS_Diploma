function arrow() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (e.target.closest('a').getAttribute('href').length < 2) {
        return;
      }
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const elem = document.getElementById('clubs'),
    arrow = document.getElementById('totop');
  arrow.style.visibility = 'hidden';

  document.addEventListener('scroll', () => {
    var top = elem.getBoundingClientRect().top + document.body.scrollTop;
    if (top > 0) {
      arrow.style.visibility = 'hidden';
    } else {
      arrow.style.visibility = 'visible';
    }
  });
}

export default arrow;
