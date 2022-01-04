function discover() {
  var discovered;
  var totalDiscovered = document.querySelectorAll('.discovered:not(.hits)');

  if (totalDiscovered.length > 1) {
    return;
  }

  this.classList.add('discovered');

  discovered = document.querySelectorAll('.discovered:not(.hits)');

  if (discovered.length < 2) {
    return;
  }

  comparison(discovered);
}
function comparison(cardsToCompare) {
  if (cardsToCompare[0].dataset.value === cardsToCompare[1].dataset.value) {
    success(cardsToCompare);
  } else {
    error(cardsToCompare);
  }
}
