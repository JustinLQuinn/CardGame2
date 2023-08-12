// class AudioController{
//     constructor(){
//         this.bgMusic = new Audio('filePath');
//         this.flipSound = new Audio('filePath');
//         this.matchSound = new Audio('filePath');
//         this.victorySound = new Audio('filePath');
//         this.gameOverSound = new Audio('filePath');
//         this.bgMusic.volume = 0.5;
//         this.bgMusic.loop = true;
//     }
//     startMusic(){
//         this.bgMusic.play();
//     }
//     stopMusic(){
//         this.bgMusic.pause();
//         this.bgMusic.currentTime = 0;
//     }
//     flip(){
//         this.flipSound.play();
//     }
//     match(){
//         this.matchSound.play();
//     }
//     victory(){
//         this.stopMusic();
//         this.victorySound.play();
//     }
//     gameOver(){
//         this.stopMusic();
//         this.gameOverSound.play();
//     }
// }

class MixOrMatch{
    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        // this.audioController = new AudioController();
    }
    assignCards(){
        let cards = Array.from(document.getElementsByClassName('card'));
        let deckOfCards = [{"id":1,"value":"A","suit":"Heart","color":"red"},
        {"id":2,"value":"2","suit":"Heart","color":"red"},
        {"id":3,"value":"3","suit":"Heart","color":"red"},
        {"id":4,"value":"4","suit":"Heart","color":"red"},
        {"id":5,"value":"5","suit":"Heart","color":"red"},
        {"id":6,"value":"6","suit":"Heart","color":"red"},
        {"id":7,"value":"7","suit":"Heart","color":"red"},
        {"id":8,"value":"8","suit":"Heart","color":"red"},
        {"id":9,"value":"9","suit":"Heart","color":"red"},
        {"id":10,"value":"10","suit":"Heart","color":"red"},
        {"id":11,"value":"J","suit":"Heart","color":"red"},
        {"id":12,"value":"Q","suit":"Heart","color":"red"},
        {"id":13,"value":"K","suit":"Heart","color":"red"},
        {"id":14,"value":"A","suit":"Club","color":"black"},
        {"id":15,"value":"2","suit":"Club","color":"black"},
        {"id":16,"value":"3","suit":"Club","color":"black"},
        {"id":17,"value":"4","suit":"Club","color":"black"},
        {"id":18,"value":"5","suit":"Club","color":"black"},
        {"id":19,"value":"6","suit":"Club","color":"black"},
        {"id":20,"value":"7","suit":"Club","color":"black"},
        {"id":21,"value":"8","suit":"Club","color":"black"},
        {"id":22,"value":"9","suit":"Club","color":"black"},
        {"id":23,"value":"10","suit":"Club","color":"black"},
        {"id":24,"value":"J","suit":"Club","color":"black"},
        {"id":25,"value":"Q","suit":"Club","color":"black"},
        {"id":26,"value":"K","suit":"Club","color":"black"},
        {"id":27,"value":"A","suit":"Diamond","color":"red"},
        {"id":28,"value":"2","suit":"Diamond","color":"red"},
        {"id":29,"value":"3","suit":"Diamond","color":"red"},
        {"id":30,"value":"4","suit":"Diamond","color":"red"},
        {"id":31,"value":"5","suit":"Diamond","color":"red"},
        {"id":32,"value":"6","suit":"Diamond","color":"red"},
        {"id":33,"value":"7","suit":"Diamond","color":"red"},
        {"id":34,"value":"8","suit":"Diamond","color":"red"},
        {"id":35,"value":"9","suit":"Diamond","color":"red"},
        {"id":36,"value":"10","suit":"Diamond","color":"red"},
        {"id":37,"value":"J","suit":"Diamond","color":"red"},
        {"id":38,"value":"Q","suit":"Diamond","color":"red"},
        {"id":39,"value":"K","suit":"Diamond","color":"red"},
        {"id":40,"value":"A","suit":"Spade","color":"black"},
        {"id":41,"value":"2","suit":"Spade","color":"black"},
        {"id":42,"value":"3","suit":"Spade","color":"black"},
        {"id":43,"value":"4","suit":"Spade","color":"black"},
        {"id":44,"value":"5","suit":"Spade","color":"black"},
        {"id":45,"value":"6","suit":"Spade","color":"black"},
        {"id":46,"value":"7","suit":"Spade","color":"black"},
        {"id":47,"value":"8","suit":"Spade","color":"black"},
        {"id":48,"value":"9","suit":"Spade","color":"black"},
        {"id":49,"value":"10","suit":"Spade","color":"black"},
        {"id":50,"value":"J","suit":"Spade","color":"black"},
        {"id":51,"value":"Q","suit":"Spade","color":"black"},
        {"id":52,"value":"K","suit":"Spade","color":"black"}];
    //console.log(cards);
    //console.log(deckOfCards);
            let combinedCards = [];
            let b = 0;
            let ids = [];
            cards.forEach(card => {
                if(ids.length > 5){
                    let newRelation = {"htmlCard": card.id,"cardLiteral":[]};
                    newRelation.cardLiteral.push(combinedCards[b].cardLiteral[0]);
                    //console.log(newRelation);
                    combinedCards.push(newRelation);
                    ids.push(newRelation.cardLiteral[0].id);
                    //console.log(ids);
                    b++;
                }else{
                let i = Math.floor(Math.random()*52);
                let newRelation = {"htmlCard": card.id,"cardLiteral":[deckOfCards[i]]};
    
                    while(ids.includes(newRelation.cardLiteral[0].id)){
                        let c = Math.floor(Math.random()*52);
                        //console.log(newRelation);
                        let newRelation2 = {"htmlCard": card.id,"cardLiteral":[deckOfCards[c]]};
                        //console.log(newRelation2);
                        newRelation = 0;
                        //console.log(newRelation);
                        newRelation = newRelation2;
                        //console.log(newRelation);
                    }
                        combinedCards.push(newRelation);
                        ids.push(newRelation.cardLiteral[0].id);
                        //console.log(ids);
                }
            });
        //console.log(combinedCards);
            combinedCards.forEach(relation => {
                let valueHTML = Array.from(document.getElementById(relation.htmlCard).getElementsByClassName('card-value'));
                valueHTML.forEach(value => {value.innerText = relation.cardLiteral[0].value});
                let suitHTML = document.getElementById(relation.htmlCard).getElementsByClassName('card-suit')[0];
                //console.log(relation.cardLiteral[0].suit);
                suitHTML.alt = relation.cardLiteral[0].suit;
                if(suitHTML.alt === "Spade"){
                //     suitHTML.src = ".cards/rear_image/Spade.jpg";
                }else if(suitHTML.alt === "Diamond"){
                //     suitHTML.src = ".cards/rear_image/Diamond.jpg";
                }else if(suitHTML.alt === "Club"){
                //     suitHTML.src = ".cards/rear_image/Club.jpg";
                }else{
                //     suitHTML.src = ".cards/rear_image/Heart.jpg";
                }
            });
            this.startGame(); 
    }

    startGame(){
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            //this.assignCards(); 
            // this.AudioController.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500)    
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }

    hideCards(){
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }

    flipCard(card){
        if (this.canFlipCard(card)) {
            // this.AudioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            if(this.cardToCheck)
                this.checkForCardMatch(card);
            else
                this.cardToCheck = card;
        }
    }

    checkForCardMatch(card){
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMisMatch(card, this.cardToCheck); 

            this.cardToCheck = null;
    }

    cardMatch(card1, card2){
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        // this.audioController.match();
        if(this.matchedCards.length === this.cardsArray.length)
        this.victory();
    }

    cardMisMatch(card1, card2){
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }

    getCardType(card){
        return card.getElementsByClassName('card-value')[0].innerText +","+ card.getElementsByClassName('card-suit')[0].alt;
    }

    startCountDown(){
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
                if(this.timeRemaining === 0)
                    this.gameOver();
        }, 1000);
    }

    gameOver(){
        clearInterval(this.countDown);
        // this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
        let cards = Array.from(document.getElementsByClassName('card'));
        cards.forEach(card =>{
            let cardValue = Array.from(document.getElementById(card.id).getElementsByClassName('card-value'));
            cardValue.forEach(value => {value.innerText = ""});
            card.getElementsByClassName('card-suit')[0].alt = "";
        });
        

    }

    victory(){
        clearInterval(this.countDown);
        // this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
    }

    shuffleCards(){ // Fisher-Yates Shuffle Algorithm.
        for(let i = this.cardsArray.length - 1; i > 0; i--){
            let randIndex = Math.floor(Math.random()*(i+1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
        }
    }

    canFlipCard(card){
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }   
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
    }else{
        ready();
    }

function ready(){
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(100, cards);
    
    overlays.forEach(overlay =>{
        overlay.addEventListener('click',() =>{
            overlay.classList.remove('visible');
            game.assignCards();
        });
    });
    cards.forEach(card =>{
        card.addEventListener('click',()=>{
            game.flipCard(card);
        });
    });

}
