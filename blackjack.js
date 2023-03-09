let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackjack = false;
let message = "";
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Emmanuel",
    chips: 875
};



function startgame(){
    isAlive = true;
    let firstcard = getRandom();
    let secondcard = getRandom();
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;
    rendergame();
}

function getRandom(){
   let randNum = Math.floor(Math.random()*13) + 1;
   if ( randNum === 1){
    return 11;
   }
   else if (randNum >= 10){
    return 10;
   }
   else {
    return randNum;
   }
}

 function rendergame(){
    

    cardEl.textContent = "Cards: "

    for (let i=0;i<cards.length;i++){
        cardEl.textContent +=  cards[i] + " ";
    }


    sumEl.textContent = "Sum: " + sum;
    if (sum === 21){
        message = "You've got Blackjack";
        hasBlackjack = true;    
    }
    else if (sum < 21){
        message = "Do you want to draw a new card?"
    }
    else if (sum > 21){
        message = "You're out of the game!"
        isAlive = false;
    }

    messageEl.textContent = message;
    playerEl.textContent = player.name + ": $" + player.chips;
}

function newcard(){
    if (isAlive === true && hasBlackjack === false){
    card = getRandom();
    sum += card;
    cards.push(card);
    console.log(cards);
    rendergame();
    }
}