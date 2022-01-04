function success(cards){
    cards.forEach((element) => {
        element.classList.add("hits");
    })    
}

function error(cards){
    cards.forEach((element) => {
        element.classList.add("error");       
    })
    
    setTimeout(() => {
        cards.forEach((element) => {
            element.classList.remove("discovered");
            element.classList.remove("error");
        });
    }, 1000);   
}