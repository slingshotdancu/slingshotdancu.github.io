var game = new Phaser.Game(800, 800, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
let turnNumber = 0;
let pTurnBool;
let counter;
let greenButton, redButton, blueButton, yellowButton;
let startButton, leftButton, rightButton;
let blueAudio, greenAudio, redAudio, yellowAudio;

let theMoves = {};
theMoves.playerMoves = [];
theMoves.compMoves = [];

function preload () {
    game.load.image('background', 'assets/bgLayer.png');
    game.load.image('redButton', 'assets/redLayer.png');
    game.load.image('yellowButton', 'assets/yellowLayer.png');
    game.load.image('blueButton', 'assets/blueLayer.png');
    game.load.image('greenButton', 'assets/greenLayer.png');
    game.load.image('layer2', 'assets/Layer-2.png');
    game.load.image('rightBtn', 'assets/leftButton.png');
    game.load.image('startButton', 'assets/centerGreenButton.png');
    game.load.image('leftRedBtn', 'assets/centerRedButton.png');    
    game.load.image('black', 'assets/black.png');
    game.load.image('num0', 'assets/num0.png');
    game.load.image('num1', 'assets/num1.png');
    game.load.image('num2', 'assets/num2.png');
    game.load.image('num3', 'assets/num3.png');
    game.load.image('num4', 'assets/num4.png');
    game.load.image('num5', 'assets/num5.png');
    game.load.image('num6', 'assets/num6.png');
    game.load.image('num7', 'assets/num7.png');
    game.load.image('num8', 'assets/num8.png');
    game.load.image('num9', 'assets/num9.png');    
    game.load.audio('gsfx', ['audio/green.mp3', 'audio/green.ogg']);
    game.load.audio('rsfx', ['audio/red.mp3', 'audio/red.ogg']);
    game.load.audio('ysfx', ['audio/yellow.mp3', 'audio/yellow.ogg']);
    game.load.audio('bsfx', ['audio/blue.mp3', 'audio/blue.ogg']);
}
function create () {
    game.add.tileSprite(0, 0, 800, 800, 'background');
    game.add.image(257, 258, 'layer2');
    counter = game.add.sprite(378, 435, 'num0');
//blue button
    blueButton = game.add.image(412, 412, 'blueButton');
    blueButton.anchor.set(0);
    blueButton.inputEnabled = true;
    blueButton.events.onInputDown.add(onBDown, this);
    blueButton.events.onInputUp.add(onBUp, this);
//green button
    greenButton = game.add.image(28, 31, 'greenButton');
    greenButton.anchor.set(0);
    greenButton.inputEnabled = true;
    greenButton.events.onInputDown.add(onGDown, this);
    greenButton.events.onInputUp.add(onGUp, this);
//red button
    redButton = game.add.image(412, 31, 'redButton');
    redButton.anchor.set(0);
    redButton.inputEnabled = true;    
    redButton.events.onInputDown.add(onRDown, this);
    redButton.events.onInputUp.add(onRUp, this);
//yellow button
    yellowButton = game.add.image(28, 412, 'yellowButton');
    yellowButton.anchor.set(0);
    yellowButton.inputEnabled = true;
    yellowButton.events.onInputDown.add(onYDown, this);
    yellowButton.events.onInputUp.add(onYUp, this);
//audio    
    greenAudio = game.add.audio('gsfx');
    redAudio = game.add.audio('rsfx');
    yellowAudio = game.add.audio('ysfx');
    blueAudio = game.add.audio('bsfx');
//middle green button
    startButton = game.add.image(385, 500, 'startButton');
    startButton.anchor.set(0);
    startButton.inputEnabled = true;
    startButton.events.onInputDown.add(startBtnClick, this);
//yellow button on the right
    rightButton = game.add.image(455, 500, 'rightBtn');
    rightButton.anchor.set(0);
    rightButton.inputEnabled = true;
    rightButton.events.onInputDown.add(rightBtnDown, this);
    rightButton.events.onInputDown.add(rightBtnUp, this);
    //left red button    
    leftButton = game.add.image(315, 500, 'leftRedBtn');
    leftButton.anchor.set(0);
    leftButton.inputEnabled = true;
    leftButton.events.onInputDown.add(leftBtnDown, this);
    leftButton.events.onInputUp.add(leftBtnUp, this);
}
function update () {
    if (pTurnBool === true) {
        game.inputEnabled = true;
    } else if (pTurnBool === false) {
        game.inputEnabled === false;
    }
     }   
function reset () {
    for (var i = 0; i < 20; i++) {
        theMoves.playerMoves[i] = " ";
        console.log(theMoves.playerMoves);
    }
    for (var j = 0; j < 20; j++) {
        theMoves.compMoves[j] = " ";
        console.log(theMoves.compMoves);
    }
    turnNumber = 0;
    counter.destroy();
    counter = game.add.sprite(378, 435, 'num0');
}
//when user clicks green button
function startBtnClick () {
    changeTurnNum();
}
//add one to the turn number variable
function changeTurnNum () {
    turnNumber = turnNumber + 1;
        switch (turnNumber) {
            case 0: counter.destroy();
                counter = game.add.sprite(378, 435, 'num0');
                compsTurn();
                break;
            case 1: counter.destroy();
                counter = game.add.sprite(378, 435, 'num1');
                compsTurn();
                break;
            case 2: counter.destroy();
                counter = game.add.sprite(378, 435, 'num2');
                compsTurn();
                break;
            case 3: counter.destroy();
                counter = game.add.sprite(378, 435, 'num3');
                compsTurn();
                break;
            case 4: counter.destroy();
                counter = game.add.sprite(378, 435, 'num4');
                compsTurn();
                break;
            case 5: counter.destroy();
                counter = game.add.sprite(378, 435, 'num5');
                compsTurn();
                break;
            case 6: counter.destroy();
                counter = game.add.sprite(378, 435, 'num6');
                compsTurn();
                break;
            case 7: counter.destroy();
                counter = game.add.sprite(378, 435, 'num7');
                compsTurn();
                break;
            case 8: counter.destroy();
                counter = game.add.sprite(378, 435, 'num8');
                compsTurn();
                break;
            case 9: counter.destroy();
                counter = game.add.sprite(378, 435, 'num9');
                compsTurn();
                break;
    }
}
//returns a random number, 1-4 to assign to a color
function getRandomNum () {
    return Math.floor((Math.random() * 4) + 1);
}
//assign comp a random num then change visual button/play audio/push first letter to array
function compsTurn () {
    pTurnBool = false;
    let compNumber = getRandomNum();
    let compColor;
    switch (compNumber) {
        case 1: compColor = "g";
            pushToCompArr(compColor);
            checkEquality();
            checkForInput();
            break;
        case 2: compColor = "r";
            pushToCompArr(compColor);
            checkEquality();
            checkForInput();
            break;
        case 3: compColor = "y";
            pushToCompArr(compColor);
            checkEquality();
            checkForInput();
            break;
        case 4: compColor = "b";
            pushToCompArr(compColor);
            checkEquality();
            checkForInput();
            break;
    }
    pTurnBool = true;
    playersTurn();
}
//add turn number and enable input for buttons
function playersTurn () {
    checkForInput();    
}
//if players last position is undefined, start this function again, else compare it to computers
function checkForInput () {
    let tally = 0;
    yellowButton.onInputDown.add(pushToPlayerArr("y"));
    redButton.onInputDown.add(pushToPlayerArr("r"));
    blueButton.onInputDown.add(pushToPlayerArr("b"));
    greenButton.onInputDown.add((pushToPlayerArr("g")));
    for (var i = 0; i < turnNumber; i++) {
        if (theMoves.playerMoves[i] === theMoves.compMoves[i]) {
        tally = tally + 1;
            alert(tally);
        }
    } if (tally === theMoves.compMoves.length) {
        changeTurnNum();
        alert("yay");
    }
        }
function checkEquality () {
counter = 0;
    var compLoop = setInterval(movesSwitch, 1000);
    function movesSwitch() {
        switch (theMoves.compMoves[counter]) {
        case "g":
            setTimeout(onGDown, 500);
            setTimeout(onGUp, 1000);
            counter = counter + 1;
            movesSwitch();
            break;
        case "r":
            setTimeout(onRDown, 500);
            setTimeout(onRUp, 1000);
            counter = counter + 1;
            movesSwitch();
            break;
        case "y":
            setTimeout(onYDown, 500);
            setTimeout(onYUp, 1000);
            counter = counter + 1;
            movesSwitch();
            break;
        case "b": 
            setTimeout(onBDown, 500);
            setTimeout(onBUp, 1000);
            counter = counter + 1;
            movesSwitch();
            break;
        default:
            clearInterval(compLoop);
            break;
        }
    }
}
function onGDown () {
    greenAudio.play();
    greenButton.alpha = 0.3;    
}
function onGUp () {
    greenButton.alpha = 1;
}
function onBDown () { 
    blueAudio.play();
    blueButton.alpha = 0.3;
}
function onBUp () {
    blueButton.alpha = 1;
}
function onYDown () {
    yellowAudio.play();
    yellowButton.alpha = 0.3; 
}
function onYUp () {
    yellowButton.alpha = 1;
}
function onRDown () {
    redAudio.play();
    redButton.alpha = 0.3;
}
function onRUp () {
    redButton.alpha = 1;
}
function rightBtnDown () {
    turnNumber = 0;
    counter = game.add.sprite(378, 435, 'num0');
    changeTurnNum();
}
function rightBtnUp () {
    alert("right button's up!");
}
function leftBtnDown () {
    leftButton.destroy();
    leftButton = game.add.image(315, 500, 'ctrRdBtn');

}
function leftBtnUp () {
        leftButton = game.add.image(315, 500, 'startButton');

}
function pushToPlayerArr (color) {
    switch (color) {
        case "r": theMoves.playerMoves.push("r");
        break;
        case "g": theMoves.playerMoves.push("g");
        break;
        case "b": theMoves.playerMoves.push("b");
        break;
        case "y": theMoves.playerMoves.push("y");
        break;
    }
}
function pushToCompArr (color) {
    switch(color) {
        case "r": theMoves.compMoves.push("r");
        break;
        case "g": theMoves.compMoves.push("g");
        break;
        case "b": theMoves.compMoves.push("b");
        break;
        case "y": theMoves.compMoves.push("y");
        break;
    }
}