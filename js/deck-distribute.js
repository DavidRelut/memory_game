function randomCards(element) {
  var result;

  result = element.sort(() => {
    return 0.5 - Math.random();
  });
  return result;
}

function distributeCard(element) {
  var random = randomCards(element);
  const container = document.getElementById('container');
  container.innerHTML = '';

  for (let i = 0; i < element.length; i++) {
    let cards = document.createElement('div');

    cards.innerHTML = `
        <div class="card" data-value=${random[i]}>
            <div class="card__content">
                ${random[i]}
            </div>
        </div>`;

    container.appendChild(cards);
  }
}
