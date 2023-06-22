class AudioController{
    constructor(){
        this.bgMusic = new Audio('filePath');
        this.flipSound = new Audio('filePath');
        this.matchSound = new Audio('filePath');
        this.victorySound = new Audio('filePath');
        this.gameOverSound = new Audio('filePath');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic(){
        this.bgMusic.play();
    }
    stopMusic(){
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip(){
        this.flipSound.play();
    }
    match(){
        this.matchSound.play();
    }
    victory(){
        this.stopMusic();
        this.victory.play();
    }
    gameOver(){
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class mixOrMatch{
    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.sets = document.getElementById('sets');
    }
    startGame(){
        this.cardToCheck = null;
    }
}

function ready(){
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(documents.getElementsByClassName('card'));

    overlays.forEach(overlay =>{
        overlay.addEventListener('click',() =>{
            overlay.classList.remove('visible');
            //game.startGame();
        });
    });
    cards.forEach(card =>{
        card.addEventListener('click',()=>{
            //game.flipCard(card);
        });
    });
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', ready());
    }else{
        ready();
    }