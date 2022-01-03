function hits(cards){
    cards.forEach((element) => {
        element.classList.add('hits')            
    })    
}

function errors(cards){
    cards.forEach((element) => {
        element.classList.remove('discovered')        
    })
}

