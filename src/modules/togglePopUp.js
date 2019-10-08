function togglePopUp() {
  document.body.addEventListener('click', (event) => {
    const popupList = document.querySelectorAll('.popup'),
      target = event.target,
      popupId = target.getAttribute('data-popup'),
      popup = document.querySelector(popupId),
			giftIcon = document.querySelector('.fixed-gift');
			
    if (popupId == '#free_visit_form' || popupId == '#callback_form') {
      popup.style.display = 'block';
    }

    if (target.matches('.overlay') || target.matches('.close_icon') || target.matches('.close-btn')) {
      popupList.forEach((elem) => {
        if (window.getComputedStyle(elem).display == 'block') {
					elem.style.display = 'none';
					giftIcon.style.display = 'block';
				}
      });
    }

    if (target.closest('.fixed-gift')) {
      const popup = document.getElementById('gift');
      popup.style.display = 'block';
      giftIcon.style.display = 'none';
    }
  });
}

export default togglePopUp;
