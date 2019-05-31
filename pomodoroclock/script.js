//min:sec for 25 minute work period
let displaySecs = 0;
let displayMins = 25;
var dispMinControl = true;
var timerStarted = 0;
//Used as keyword for clearInterval
let secsVar;
let secsBreakVar;
let canvas = document.getElementById("c");
let ctx = canvas.getContext("2d");
let work = true;
//time readable: 0 > sec > 60
function zeroToSixty(mins, secs) {
    console.log("zeroToSixty fired");
    if ((secs === 0)&&(mins === 0)) {
        changeState(work);
    } else if(secs <= 0) {
        secs = 59;
    if(mins > 0) {
        mins -= 1;
    } else {
        mins = 0;
    }
    }
    }
//clear spot for new number & insert it
function fillNum() {
    console.log("fillNum fired");
    ctx.clearRect(-115, -70, 330, 140);
    ctx.fillStyle = "white";
    ctx.fillRect(-115, -70, 330, 140);
    ctx.font = "110px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    //formatting for adding predicative "0" for numbers < 10
    if((displaySecs < 10)&&(displaySecs >= 0)) {
    ctx.fillText(displayMins + ":0" + displaySecs, 50, 50);
    } else if(displaySecs < 0) {
        displaySecs = 59;
        ctx.fillText(displayMins + ":" + displaySecs, 50, 50);
    } else if(displaySecs > 59) {
        displaySecs = 0;
        ctx.fillText(displayMins + ":0" + displaySecs, 50, 50);
    } else {
        ctx.fillText(displayMins + ":" + displaySecs, 50, 50);
    }
    }
function fillText(workStatus) {
    if (workStatus === true) {
    document.getElementById("title").innerHTML = "Work!";
    ctx.clearRect(-25, 135, 150, -60);
    ctx.fillStyle = "white";
    ctx.fillRect(-25, 135, 150, -60);
    ctx.font = "8px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    } else if (workStatus === false) {
    document.getElementById("title").innerHTML = "Relax!";
    ctx.clearRect(-25, 135, 150, -60);
    ctx.fillStyle = "white";
    ctx.fillRect(-25, 135, 150, -60);
    ctx.font = "8px Arial";
    ctx.fontWeight = 100;
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    } else {
    document.getElementById("title").innerHTML = "Pomodoro Clock";
    }
}
function changeState(workStatus) {
    console.log("changeState fired");
    if(workStatus) {
        clearInterval(secsVar);
        displaySecs = 0;
        displayMins = 25;
        changeBox();
        startTimer();
        fillText(work);
        fillNum();
    } else if(workStatus === false) {
        clearInterval(secsVar);
        displaySecs = 0;
        displayMins = 5;
        changeBox();
        timerStarted = 0;
        dispMinControl = true;
        startTimer();
        fillNum();
        fillText(work);
    }
}
//drawdaclock
function drawClock() {
    console.log("drawClock fired");
    let radius = canvas.height/2;
    ctx.translate(radius, radius);
    radius = radius * 0.90;
    ctx.arc(50, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}
//subtract from timer mins
function subOneMin() {
    console.log("subOneMin fired");
    ctx.clearRect(-115, -70, 330, 140);
    ctx.fillStyle = "white";
    ctx.fillRect(-115, -70, 330, 140);
    displayMins -= 1;
    let minsMinus = document.getElementById("dispNumMins");
    minsMinus.innerHTML = displayMins;
    zeroToSixty(displayMins, displaySecs);
    fillNum();
    }
function addOneMin() {
    console.log("addOneMin fired");
    ctx.clearRect(-115, -70, 330, 140);
    ctx.fillStyle = "white";
    ctx.fillRect(-115, -70, 330, 140);
    displayMins += 1;
    zeroToSixty(displayMins, displaySecs);
    let minsPlus = document.getElementById("dispNumMins");
    minsPlus.innerHTML = displayMins;
    fillNum();
}
function subOneSec() {
    console.log("subOneSec fired");
    ctx.clearRect(0, -49, 170, 110);
    ctx.fillStyle = "white";
    ctx.fillRect(0, -49, 170, 110);
    displaySecs -= 1;
    zeroToSixty(displayMins, displaySecs);
    let secsMinus = document.getElementById("dispNumSecs");
    secsMinus.innerHTML = displaySecs;
    fillNum();
}
function addOneSec() {
    console.log("addOneSec fired");
    ctx.clearRect(0, -49, 170, 110);
    ctx.fillStyle = "white";
    ctx.fillRect(0, -49, 170, 110);
    displaySecs += 1;
    zeroToSixty(displayMins, displaySecs);
    let secsPlus = document.getElementById("dispNumSecs");
    secsPlus.innerHTML = displaySecs;
    fillNum();
}
function minsCountdown() {
    console.log("minsCountdown fired");
    displayMins -= 1;
    ctx.clearRect(-115, -70, 330, 140);
    ctx.fillStyle = "white";
    ctx.fillRect(-115, -70, 330, 140);
    if(displayMins === 0) {
        fillNum();
    }
}
function changeBox() {
    if(work === true) {
    canvas.className = "cWork";
    }
    if(work === false) {
    canvas.className = "cRelax";
    }
}
function startTimer() {
 timerStarted++;
    if (timerStarted === 1) {
    changeBox();
    document.getElementById("dispNumMins").innerHTML = displayMins;
    if(dispMinControl === true){
    displayMins -= 1;
    dispMinControl = false;
    }
    secsVar = setInterval(secsCountdown, 1000);   
}
timerStarted++;
}
function secsCountdown() {
    console.log("secsCountdown fired");
    displaySecs -= 1;
    if((displayMins === 0)&&(displaySecs === 0)) {
        if(work) {
            work = false;
            changeState(work);
        } else if(work === false) {
            work = true;
            changeState(work);  
        }
    } else if(displaySecs === 0) {
        displayMins -= 1;
        document.getElementById("dispNumMins").innerHTML = displayMins;
        fillNum();
    } else if(displayMins < 0) {
            displayMins = 0;
            document.getElementById("dispNumMins").innerHTML = displayMins;
            fillNum();
            fillText(work);
        }
    fillNum();
    fillText(work);
    
}

function stopTimer() {
    clearInterval(secsVar);
    console.log("stopTimer fired");
    canvas.className = "cDefault";
    ctx.clearRect(-25, 135, 150, -60);
    ctx.fillStyle = "white";
    ctx.fillRect(-25, 135, 150, -60);
    document.getElementById("title").innerHTML = "Pomodoro Clock";
    timerStarted = 0;
    }
function resetTimer() {
    work = true;
    dispMinControl = true;
    clearInterval(secsVar);
    displayMins = 25;
    displaySecs = 0;
    fillNum();
    let clearMins = document.getElementById("dispNumMins");
    clearMins.innerHTML = displayMins;
    document.getElementById("title").innerHTML = "Pomodoro Clock";

}
function clearCountdown() {
    work = true;
    clearInterval(secsVar);
    displayMins = 25;
    displaySecs = 0;
    fillNum();
    document.getElementById("title").innerHTML = "Pomodoro Clock";

}
drawClock();
fillNum();