var arr = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];

let player = {};
let computer = {};
let movesPlayer = [];
let movesComp = [];
var computersTurn = false;
var compObj = {0:"one", 1:"two", 2:"three", 3:"four", 4:"five", 5:"six", 6:"seven", 7:"eight", 8:"nine"};

function reset() {
    arr = ["#", "#", "#", "#", "#", "#", "#", "#", "#"]
    var resetButtonO = document.getElementById("O");
    resetButtonO.className = "btn btn-default";
    var resetButtonX = document.getElementById("X");
    resetButtonX.className = "btn btn-default";
    
    var resetOne = document.getElementById("one");
    resetOne.className = "btn btn-default";
    resetOne.innerHTML = "#";
    var resetTwo = document.getElementById("two");
    resetTwo.className = "btn btn-default";
    resetTwo.innerHTML = "#";
    var resetThree = document.getElementById("three");
    resetThree.className = "btn btn-default";
    resetThree.innerHTML = "#";
    var resetFour = document.getElementById("four");
    resetFour.className = "btn btn-default";
    resetFour.innerHTML = "#";
    var resetFive = document.getElementById("five");
    resetFive.className = "btn btn-default";
    resetFive.innerHTML = "#";
    var resetSix = document.getElementById("six");
    resetSix.className = "btn btn-default";
    resetSix.innerHTML = "#";
    var resetSeven = document.getElementById("seven");
    resetSeven.className = "btn btn-default";
    resetSeven.innerHTML = "#";
    var resetEight = document.getElementById("eight");
    resetEight.className = "btn btn-default";
    resetEight.innerHTML = "#";
    var resetNine = document.getElementById("nine");
    resetNine.className = "btn btn-default";
    resetNine.innerHTML = "#";
}
//function assigning which identity the player picks and alerting them about it, afterwards disabling buttons so they can't choose again, class names are used from Bootstrap
function playerX() {
    player.identity = "X";
    computer.identity = "O";
    alert("You are " + player.identity + "!");
    var disableButtonX = document.getElementById("X");
    disableButtonX.className = "btn btn-primary disabled";
    var disableButtonO = document.getElementById("O");
    disableButtonO.className = "btn btn-primary disabled";
}
//same as function above, for the O option
function playerO() {
    player.identity = "O";
    computer.identity = "X";
    alert("You are " + player.identity + "!");
    var disableButtonO = document.getElementById("O");
    disableButtonO.className = "btn btn-primary disabled";
    var disableButtonX = document.getElementById("X");
    disableButtonX.className = "btn btn-primary disabled";
}

//function called when user clicks one of the buttons, if the spot in the array contains #, it assigns the player's identity to that spot in the array and on the screen
function changeTile(id, num) {
    if(player.identity === undefined) {
    reset();
    alert("Please pick X or O!");
    } else { 
    var getEl = document.getElementById(id);
    getEl.className = "btn btn-block btn-primary disabled";
    getEl.innerHTML = player.identity;
    if(arr[num] === "#") {
    arr[num] = player.identity;
    gameOver();
    }
compTurn();
}
}
    function compTurn() {
    computersTurn = true;
    while(computersTurn === true) {
    var compChoice = getRandomNum();
    if(arr[compChoice] === "#") {
    arr[compChoice] = computer.identity;
    var compEl = document.getElementById(compObj[compChoice]);
    compEl.innerHTML = computer.identity;
    compEl.className = "btn btn-block btn-primary disabled";
    computersTurn = false;
    gameOver();
    } else {
    //recursive function run getRandomNum again and assign it to compChoice, do while?
    compTurn();
    }
    computersTurn = false;
    }

function getRandomNum() {
    return Math.floor(Math.random()*8);
}
}

function gameOver() {
    if((arr[0]===arr[1])&&(arr[1]===arr[2])) {
        if((arr[0]!=="#")&&(arr[1]!=="#")&&(arr[2]!=="#")) {
        alert("Game over! " + arr[0] + " wins!");
        reset();
        }
    } else if(((arr[3]===arr[4])&&(arr[4]===arr[5]))) {
        if((arr[3]!=="#")&&(arr[4]!=="#")&&(arr[5]!=="#")){
        alert("Game over! " + arr[3] + " wins!");
        reset();
        }
    } else if(((arr[6]===arr[7])&&(arr[7]===arr[8]))) {
        if((arr[6]!=="#")&&(arr[7]!=="#")&&(arr[8]!=="#")){
        alert("Game over! " + arr[6] + " wins!");
        reset();
        }
    } else if(((arr[0]===arr[3])&&(arr[3]===arr[6]))) {
        if((arr[0]!=="#")&&(arr[3]!=="#")&&(arr[6]!=="#")){
        alert("Game Over! " + arr[6] + " wins!");
        reset();
        }
    } else if(((arr[1]===arr[4])&&(arr[4]===arr[7]))) {
        if((arr[1]!=="#")&&(arr[4]!=="#")&&(arr[7]!=="#")){
        alert("Game over! " + arr[1] + " wins!");
        reset();
        }
    } else if(((arr[2]===arr[5])&&(arr[5]===arr[8]))) {
        if((arr[2]!=="#")&&(arr[5]!=="#")&&(arr[8]!=="#")){
        alert("Game Over! " + arr[2] + " wins!");
        reset();
        }
    } else if(((arr[0]===arr[4])&&(arr[4]===arr[8]))) {
        if((arr[0]!=="#")&&(arr[4]!=="#")&&(arr[8]!=="#")){
        alert("Game over! " + arr[0] + " wins!");
        reset();
        }
    } else if(((arr[6]===arr[4])&&(arr[4]===arr[2]))) {
        if((arr[6]!=="#")&&(arr[4]!=="#")&&(arr[2]!=="#")){
        alert("Game Over! " + arr[6] + " wins!");
        reset();
        }
    }
    }