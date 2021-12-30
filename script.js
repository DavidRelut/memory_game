var groupCard = ['🦄', '🍦', '🌈', '👽', '👾', '🤖', '👹', '👺'];
var totalCard = groupCard.concat(groupCard);

// const container = document.querySelector('.container');
// const card = document.getElementById('card');
// const cardContent =  document.getElementById('card_content');

function distributeCard(element){
    const container = document.getElementById('container');

    container.innerHTML = "";

    for(let i = 0; i < element.length; i++){
        let cards = document.createElement('div');

        cards.innerHTML = `
        <div class="card">
            <div class="card__content">
                ${element[i]}
            </div>
        </div>`

        container.appendChild(cards);
    }
}

distributeCard(totalCard);