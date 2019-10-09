function calculator() {
  const priceTotal = document.getElementById('price-total'),
    calcBlock = document.getElementById('card_order');

  let promocode = document.getElementById('promocode'),
    club = document.querySelectorAll('.club > input'),
		time = document.querySelectorAll('.time > input'),
		discount;

  time.forEach((elem) => {
    if (elem.checked) {
      time = elem.value;
    }
  });

  club.forEach((elem) => {
    if (elem.checked) {
      club = elem.value;
    }
  });

  const getTotalCost = (club, time) => {
    if (club === 'mozaika') {
      switch (time) {
        case '1':
          return 1999;
        case '6':
          return 9900;
        case '9':
          return 13900;
        case '12':
          return 19900;
      }
    } else if (club === 'schelkovo') {
      switch (time) {
        case '1':
          return 2999;
        case '6':
          return 14990;
        case '9':
          return 21990;
        case '12':
          return 24990;
      }
    }
  };

  priceTotal.innerHTML = getTotalCost(club, time);

  calcBlock.addEventListener('change', (event) => {
    const target = event.target;

    if (target.getAttribute('name') == 'card-type') {
      time = target.value;
    }

    if (target.getAttribute('name') == 'club-name') {
      club = target.value;
    }

    // Promocode
    if (promocode.value === 'ТЕЛО2019') {
      discount = 0.7;
    } else {
      discount = 1;
    }

    priceTotal.innerHTML = Math.round(getTotalCost(club, time) * discount);
  });
}

export default calculator;
