function calculator() {
  const priceTotal = document.getElementById('price-total'),
    calcBlock = document.getElementById('card_order'),
    baseCostMoscow = 5000,
    baseCostSchelkovo = 4000;

  let months = 1,
    discount = 1,
    baseCost = baseCostMoscow,
    price = baseCost * months,
    promocode = document.getElementById('promocode');

  priceTotal.innerHTML = price;

  calcBlock.addEventListener('change', (event) => {
    const target = event.target;

		if (target.getAttribute('name') == 'card-type') {
      months = target.getAttribute('value');
    }

    if (target.getAttribute('name') == 'club-name') {
      if (target.getAttribute('value') == 'mozaika') {
        baseCost = baseCostMoscow;
      } else {
        baseCost = baseCostSchelkovo;
      }
    }

    if (promocode.value === 'ТЕЛО2019') {
      discount = 0.7;
    } else {
      discount = 1;
    }

    price = baseCost * months * discount;

    priceTotal.innerHTML = price;
  });
}

export default calculator;
