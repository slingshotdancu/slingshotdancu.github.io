let game = new Phaser.Game(800, 800, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

let player = {};
player.moves = [];
let comp = {};
comp.moves = [];
let counter, compNumber, playerColor;
let blueButton, greenButton, redButton, yellowButton;
let blueAudio, greenAudio, redAudio, yellowAudio, wrongAudio;
let startButton, strictModeButton, resetButton;

function preload () {
    
game.load.image('bgtile', 'assets/bgtile.jpg');
game.load.image('background', 'assets/bgLayer.png');
game.load.image('greyLayer', 'assets/Layer-22.png');
game.load.image('redButton', 'assets/redLayer2.png');
game.load.image('blueButton', 'assets/blueLayer2.png');
game.load.image('greenButton', 'assets/greenLayer2.png');
game.load.image('yellowButton', 'assets/yellowLayer2.png');
game.load.image('yellowCircleButton', 'assets/leftButton.png');
game.load.image('greenCircleButton', 'assets/centerGreenButton.png');
game.load.image('redCircleButton', 'assets/centerRedButton.png');
game.load.image('x', 'assets/x.png');
game.load.image('00', 'assets/num0.png');
game.load.image('01', 'assets/num1.png');
game.load.image('02', 'assets/num2.png');
game.load.image('03', 'assets/num3.png');
game.load.image('04', 'assets/num4.png');
game.load.image('05', 'assets/num5.png');
game.load.image('06', 'assets/num6.png');
game.load.image('07', 'assets/num7.png');
game.load.image('08', 'assets/num8.png');
game.load.image('09', 'assets/num9.png');
game.load.image('10', 'assets/num10.png');
game.load.image('11', 'assets/num11.png');
game.load.image('12', 'assets/num12.png');
game.load.image('13', 'assets/num13.png');
game.load.image('14', 'assets/num14.png');
game.load.image('15', 'assets/num15.png');
game.load.image('16', 'assets/num16.png');
game.load.image('17', 'assets/num17.png');
game.load.image('18', 'assets/num18.png');
game.load.image('19', 'assets/num19.png');
game.load.image('20', 'assets/num20.png');
    
game.load.audio('wrongsfx', ['audio/wrong.mp3', 'audio/wrong.ogg']);
game.load.audio('gsfx', ['audio/green.mp3', 'audio/green.ogg']);
game.load.audio('rsfx', ['audio/red.mp3', 'audio/red.ogg']);
game.load.audio('bsfx', ['audio/blue.mp3', 'audio/blue.ogg']);
game.load.audio('ysfx', ['audio/yellow.mp3', 'audio/yellow.ogg']);
}
function create () {
game.scale.pageAlignHorizontally = true;
game.scale.pageAlignVertically = true;
game.scale.refresh();

game.add.tileSprite(0, 0, 800, 800, 'bgtile');
game.add.tileSprite(0, 0, 800, 800, 'background');
game.add.image(257, 258, 'greyLayer');

counter = game.add.image(378, 435, '00');
    
blueButton = game.add.image(412, 412, 'blueButton');
greenButton = game.add.image(28, 31, 'greenButton');
redButton = game.add.image(412, 31, 'redButton');
yellowButton = game.add.image(28, 412, 'yellowButton');

blueButton.anchor.set(0);
greenButton.anchor.set(0);
redButton.anchor.set(0);
yellowButton.anchor.set(0);

blueButton.inputEnabled = true;
greenButton.inputEnabled = true;
redButton.inputEnabled =  true;
yellowButton.inputEnabled = true;

blueButton.events.onInputDown.add(onBlueDown, this);
blueButton.events.onInputUp.add(onBlueUpP, this);
greenButton.events.onInputDown.add(onGreenDown, this);
greenButton.events.onInputUp.add(onGreenUpP, this);
redButton.events.onInputDown.add(onRedDown, this);
redButton.events.onInputUp.add(onRedUpP, this);
yellowButton.events.onInputDown.add(onYellowDown, this);
yellowButton.events.onInputUp.add(onYellowUpP, this);

greenAudio = game.add.audio('gsfx');
redAudio = game.add.audio('rsfx');
blueAudio = game.add.audio('bsfx');
yellowAudio = game.add.audio('ysfx');
wrongAudio = game.add.audio('wrongsfx');

startButton = game.add.image(385, 500, 'greenCircleButton');
startButton.anchor.set(0);
startButton.inputEnabled = true;
startButton.events.onInputDown.add(onStartButtonDown, this);

strictModeButton = game.add.image(455, 500, 'yellowCircleButton');
strictModeButton.anchor.set(0);
strictModeButton.inputEnabled = true;
strictModeButton.events.onInputDown.add(onStrictModeButtonDown, this);
strictModeButton.events.onInputUp.add(onStrictModeButtonUp, this);

resetButton = game.add.image(315, 500, 'redCircleButton');
resetButton.anchor.set(0);
resetButton.inputEnabled = true;
resetButton.events.onInputDown.add(onResetButtonDown, this);
resetButton.events.onInputUp.add(onResetButtonUp, this);

}
function update () {

}

function onBlueDown () {
    blueAudio.play();
    blueButton.alpha = 0.3;
}
function onBlueUp () {
    setTimeout(function() {
    blueButton.alpha = 1;
    }, 250);
}

function onRedDown () {
    redAudio.play();
    redButton.alpha = 0.3;
}
function onRedUp () {
    setTimeout(function() {
    redButton.alpha = 1;
    }, 250);
}

function onGreenDown () {
    greenAudio.play();
    greenButton.alpha = 0.3;
}
function onGreenUp () {
    setTimeout(function() {
    greenButton.alpha = 1;
    }, 250);
}

function onYellowDown () {
    yellowAudio.play();
    yellowButton.alpha = 0.3;
}
function onYellowUp () {
    setTimeout(function() {
    yellowButton.alpha = 1;
    }, 250);
}

function onBlueUpP () {
    blueButton.alpha = 1;
    playerColor = "b";
    pushToPlayerArr(playerColor);
    checkEquality();
}

function onRedUpP () {
    redButton.alpha = 1;
    playerColor = "r";
    pushToPlayerArr(playerColor);
    checkEquality();
}

function onGreenUpP () {
    greenButton.alpha = 1;
    playerColor = "g";
    pushToPlayerArr(playerColor);
    checkEquality();
}

function onYellowUpP () {
    yellowButton.alpha = 1;
    playerColor = "y";
    pushToPlayerArr(playerColor);
    checkEquality();
}

function onStartButtonDown () {
    console.log("onstartbuttondown ran");
    player.turnNumber = 0;
    increaseTurnNumber();
}
function onStrictModeButtonDown () {
    console.log("onstrictmodebuttondown ran");
if(player.strictMode === "on"){
    alert("Strict Mode is off");
    player.strictMode = "off";
} else {
    player.strictMode = "on";
alert("Strict Mode is on");
}
}
function onStrictModeButtonUp () {

}
function onResetButtonDown () {
    console.log("onResetButtonDown");
    clearCompArr();
    clearPlayerArr();
}
function onResetButtonUp () {
    console.log("onresetbuttonup ran");
    player.turnNumber = 0;
    increaseTurnNumber();
}

//checks the turn number and increases turnNumber/corresponding image
function increaseTurnNumber () {
console.log("increaseturnnumber ran");
    player.turnNumber += 1;
    switch (player.turnNumber) {
    case 0:
        counter.destroy();
        counter = game.add.sprite(378, 435, '00');
        compsTurn();
        break;
    case 1:
        counter.destroy();
        counter = game.add.sprite(378, 435, '01');
        compsTurn();
        break;
    case 2:
        counter.destroy();
        counter = game.add.sprite(378, 435, '02');
        compsTurn();
        break;
    case 3:
        counter.destroy();
        counter = game.add.sprite(378, 435, '03');
        compsTurn();
        break;
    case 4:
        counter.destroy();
        counter = game.add.sprite(378, 435, '04');
        compsTurn();
        break;
    case 5:
        counter.destroy();
        counter = game.add.sprite(378, 435, '05');
        compsTurn();
        break;
    case 6:
        counter.destroy();
        counter = game.add.sprite(378, 435, '06');
        compsTurn();
        break;
    case 7:
        counter.destroy();
        counter = game.add.sprite(378, 435, '07');
        compsTurn();
        break;
    case 8:
        counter.destroy();
        counter = game.add.sprite(378, 435, '08');
        compsTurn();
        break;
    case 9:
        counter.destroy();
        counter = game.add.sprite(378, 435, '09');
        compsTurn();
        break;
    case 10:
        counter.destroy();
        counter = game.add.sprite(378, 435, '10');
        compsTurn();
        break;
    case 11:
        counter.destroy();
        counter = game.add.sprite(378, 435, '11');
        compsTurn();
        break;
    case 12:
        counter.destroy();
        counter = game.add.sprite(378, 435, '12');
        compsTurn();
        break;
    case 13:
        counter.destroy();
        counter = game.add.sprite(378, 435, '13');
        compsTurn();
        break;
    case 14:
        counter.destroy();
        counter = game.add.sprite(378, 435, '14');
        compsTurn();
        break;
    case 15:
        counter.destroy();
        counter = game.add.sprite(378, 435, '15');
        compsTurn();
        break;
    case 16:
        counter.destroy();
        counter = game.add.sprite(378, 435, '16');
        compsTurn();
        break;
    case 17:
        counter.destroy();
        counter = game.add.sprite(378, 435, '17');
        compsTurn();
        break;
    case 18:
        counter.destroy();
        counter = game.add.sprite(378, 435, '18');
        compsTurn();
        break;
    case 19:
        counter.destroy();
        counter = game.add.sprite(378, 435, '19');
        compsTurn();
        break;        
    case 20:
        counter.destroy();
        counter = game.add.sprite(378, 435, '20');
        compsTurn();
        break;        
    }
}
//generates random number 1-4
function getRandomNumber () {
    console.log("getRandomNumber ran");
    return Math.floor((Math.random() * 4) + 1);
}
//assigns random number to color and pushes it to compArr
function compsTurn () {
    console.log("compsTurn ran");
    let timeoutMS = (function () {
         return player.turnNumber * 500;
    }());
    let compColor;
    compNumber = getRandomNumber();
    console.log(timeoutMS);
        switch (compNumber) {
        case 1: compColor = "g";    
            pushToCompArr(compColor);
            setTimeout(function() {
            onGreenDown();
            onGreenUp(); }, timeoutMS);
            break;
        case 2: compColor ="r";
            pushToCompArr(compColor);
            setTimeout(function() {
            onRedDown();
            onRedUp(); }, timeoutMS);
            break;
        case 3: compColor ="y";
            pushToCompArr(compColor);
            setTimeout(function() {
            onYellowDown();
            onYellowUp(); }, timeoutMS);
            break;
        case 4: compColor ="b";
            pushToCompArr(compColor);
            setTimeout(function() {
            onBlueDown();
            onBlueUp(); }, timeoutMS);
            break;
    }

    console.log('comp.moves: ' + comp.moves);
    console.log('player.moves: ' + player.moves);
} 
function pushToPlayerArr (color) {
    console.log("pushtoplayerarr ran");
    player.moves.push(color);
}
function checkEquality() {
    console.log("checkequality ran");
  console.log('player.moves: ' + player.moves);
  console.log('comp.moves: ' + comp.moves);
  if (player.moves.length === comp.moves.length) {
    if (arraysAreEqual()) {
        clearPlayerArr();
        setTimeout(playMemory, 500);
        increaseTurnNumber();
    }
  } else if (player.moves.length !== comp.moves.length) {
        let lenMinusOne = (function () { return player.moves.length - 1; }());
        if (player.moves[lenMinusOne] !== comp.moves[lenMinusOne]) {
        console.log("wrong audio played");
        wrongAudio.play();
        counter.destroy();
        counter = game.add.sprite(378, 435, 'x');
            if(player.strictMode === "on") {
                setTimeout(function() { onResetButtonDown();
                onResetButtonUp();
            }, 1000); 
            } else {
        clearPlayerArr();
        setTimeout(playMemory, 500);
      console.log('game over');
    }
  }
}
}
// Returns whether the player array is equal to the computer array.
// Assumes the two arrays are the same length.
function arraysAreEqual () {
    console.log("arraysarequal ran");
  return player.moves.every((el, i) => el === comp.moves[i]);
}
function pushToCompArr (color) {
    console.log("pushtocomparr ran");
  comp.moves.push(color);
}
function playMemory() {
    console.log("playmemory ran");
    comp.moves.forEach(function(item, index, arr) {
    switch (comp.moves[index]) {
        case "g": setTimeout(function() {
            onGreenDown();
            onGreenUp();
        }, index*500);
            break;
        case "y": setTimeout(function() {
            onYellowDown();
            onYellowUp();
        }, index*500);
            break;
        case "r": setTimeout(function() {
            onRedDown();
            onRedUp();
        }, index*500);
            break;
        case "b": setTimeout(function() {
            onBlueDown();
            onBlueUp();
        }, index*500);
            break;
    }    
    });
}

function clearPlayerArr() {
    console.log("clearplayerarr ran");
    while (player.moves.length > 0) {
        player.moves.pop();
    }
}
function clearCompArr() {
    console.log("clearcomparr ran");
    while (comp.moves.length > 0) {
        comp.moves.pop();
    }
}
function playNotesBack (item, index, arr) {
    console.log("playnotesback ran");
    let timeoutMS = (function () {
         return player.turnNumber * 500;
    }());
    switch (arr[index]) {
            case "r":
            if (index === comp.moves.length) { break; } else {
                console.log("playNotesBack: " + timeoutMS);
                setTimeout(function() {
                onRedDown();
                onRedUp(); }, index*500);  
            } break;
            case "b":
            if (index === comp.moves.length) { break; } else {
                console.log("playNotesBack: " + timeoutMS);
                setTimeout(function() {
                onBlueDown();
                onBlueUp(); }, index*500);
            } break;
            case "y":
            if (index === comp.moves.length) { break; } else {
                console.log("playNotesBack: " + timeoutMS);
                setTimeout(function() {
                onYellowDown();
                onYellowUp(); }, index*500);
            } break;
            case "g":
            if (index === comp.moves.length) { break; } else {
                console.log("playNotesBack: " + timeoutMS);
                setTimeout(function() {
                onGreenDown();
                onGreenUp(); }, index*500);
            } break;
            }
}