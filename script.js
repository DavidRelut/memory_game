var groupCard = ['🦄', '🍦', '🌈', '👽', '👾', '🤖', '👹', '👺'];
var totalCard = groupCard.concat(groupCard);

function randomCards(element){
    var result;

    result = element.sort(() => {
        return 0.5 - Math.random();
    })
    return result;
}

function distributeCard(element){
    var random = randomCards(element)
    const container = document.getElementById('container');
    container.innerHTML = "";

    for(let i = 0; i < element.length; i++){
        let cards = document.createElement('div');

        cards.innerHTML = `
        <div class="card" data-value=${random[i]}>
            <div class="card__content">
                ${random[i]}
            </div>
        </div>`

        container.appendChild(cards);
    }
    console.log(random)
}

function discover(){
    var discovered;  
    var totalDiscovered = document.querySelectorAll(".discovered");

    if(totalDiscovered.length > 1){
        return;
    }

    this.classList.add("discovered");

    discovered = document.querySelectorAll(".discovered");

    if(discovered.length < 2){
        return;
    }

    if(discovered[0].dataset.value === discovered[1].dataset.value){
        console.log("Good");
    } else {
        console.log("Error");
    }
}

distributeCard(totalCard);

// [card, card, card, ..., ..., ...]
document.querySelectorAll('.card').forEach((element) => {
    element.addEventListener('click', discover);
})