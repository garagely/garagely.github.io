var playerOneScore = 0;
var playerTwoScore = 0;
var rollScore = 0;

var playerTurn = 1;

function rollOnClick(){
    var roll = Math.floor(Math.random()*6)+1;
    var dice = document.getElementById("dice");

    dice.style.visibility = "visible";
    dice.src = "/resources/img/dice-"+roll+".png";


    if(roll == 1){
        rollScore = 0;
        document.getElementById("player-roll-score-"+playerTurn).textContent = 0;
        document.getElementById("player-one").classList.toggle("active");
         document.getElementById("player-two").classList.toggle("active");
        if(playerTurn == 1){
            playerTurn = 2;
        }else{
            playerTurn = 1;
        }
        
    }else{
        rollScore+=roll;
        document.getElementById("player-roll-score-"+playerTurn).textContent = rollScore;
    }

}

function startGame(){
    playerOneScore = 0;
    playerTwoScore =0;
    rollScore = 0;
    playerTurn = 1;

    document.getElementById("btn-roll").style.visibility = "visible";
    document.getElementById("btn-hold").style.visibility = "visible";


    document.getElementById("player-score-1").textContent = playerOneScore;
    document.getElementById("player-score-2").textContent = playerTwoScore;
    document.getElementById("player-roll-score-1").textContent = 0;
    document.getElementById("player-roll-score-2").textContent = 0;


    document.getElementById("player-one").classList.add("active");
    document.getElementById("player-two").classList.remove("active");
}

function holdOnClick(){
    document.getElementById("player-one").classList.toggle("active");
            document.getElementById("player-two").classList.toggle("active");
        if(playerTurn == 1){
            playerOneScore += rollScore;
            document.getElementById("player-score-1").textContent = playerOneScore;
            document.getElementById("player-roll-score-"+playerTurn).textContent = 0;
            playerTurn=2;
        }else{
            playerTwoScore+=rollScore;
            document.getElementById("player-score-2").textContent = playerTwoScore;
            document.getElementById("player-roll-score-"+playerTurn).textContent = 0;
            

            playerTurn=1;
        }
         rollScore = 0;

}