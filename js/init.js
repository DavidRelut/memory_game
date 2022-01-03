distributeCard(totalCard);

document.querySelectorAll('.card').forEach((element) => {
  element.addEventListener('click', discover);
});
