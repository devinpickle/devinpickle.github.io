let timerHtml = document.querySelector("#timer");

let seconds = 0.00;

var time;
let timeRunning = "False";

function createInterval() {
    if (timeRunning === "False") {
    time = setInterval(startTimer, 10);
    timeRunning = "True";
    }
} 

function startTimer() {
    
    seconds += 0.01;
    timerHtml.innerHTML = seconds.toFixed(2);
}

function resetTimer() {
    seconds = 0.00;
    timerHtml.innerHTML = seconds.toFixed(2);
}


function stopTimer() {
    console.log(time);
    clearInterval(time);
    timeRunning = "False";
}




document.querySelector("#startButton").addEventListener("click", createInterval);
document.querySelector("#resetButton").addEventListener("click", resetTimer);
document.querySelector("#stopButton").addEventListener("click", stopTimer);