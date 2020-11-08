const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
let startTime // = Date.now();
let startClock


function displayClock() {
    let timeDiff = Date.now() - startTime;
    document.getElementById('stopwatch').textContent = timeDiff;
}

function runClock() {
    startTime = Date.now();
    startClock = setInterval(displayClock, 1);
}    

function reset() {
    document.getElementById('stopwatch').textContent = 0;
}

startButton.addEventListener('click', runClock);
stopButton.addEventListener('click', function() {clearInterval(startClock)});
resetButton.addEventListener('click', reset);
