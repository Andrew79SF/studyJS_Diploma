function togglePopUp() {
  document.body.addEventListener('click', (event) => {
    const popupList = document.querySelectorAll('.popup'),
      target = event.target,
      popupId = target.getAttribute('data-popup'),
      popup = document.querySelector(popupId),
      giftIcon = document.querySelector('.fixed-gift'),

    	clearModalWindows = () => {
      popupList.forEach((elem) => {
        if (window.getComputedStyle(elem).display == 'block') {
          elem.style.display = 'none';
        }
      });
    };

    if (popupId == '#free_visit_form' || popupId == '#callback_form') {
      popup.style.display = 'block';
    }

    if (target.matches('.overlay') || target.matches('.close_icon') || target.matches('.close-btn')) {
      clearModalWindows();
    }

    if (target.closest('.fixed-gift')) {
      const popup = document.getElementById('gift');
      clearModalWindows();
      popup.style.display = 'block';
      giftIcon.style.display = 'none';
    }
  });
}

export default togglePopUp;
