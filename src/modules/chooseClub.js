function chooseClub() {
  const clubList = document.querySelector('.clubs-list > ul');

  document.body.addEventListener('click', (event) => {
    const isShow = window.getComputedStyle(clubList).display,
      target = event.target,

      fade = (op, fade) => {
        let idInterval = setInterval(() => {
          clubList.style.opacity = op;

          if (fade) {
            op = op + 0.02;
          } else {
            op = op - 0.02;
          }

          if (op > 1) {
            clearInterval(idInterval);
          } else if (op < 0) {
            clubList.style.display = 'none';
            clearInterval(idInterval);
          }
        });
      };

    if (target.closest('.clubs-list') && isShow == 'none') {
      clubList.style.display = 'block';
      fade(0, true);
    } else {
      fade(1, false);
    }
  });
}

export default chooseClub;