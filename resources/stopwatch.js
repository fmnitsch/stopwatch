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
    startButton.removeEventListener('click', runClock)
}

function stopClock() {
    clearInterval(startClock);
    startButton.addEventListener('click', runClock);
}

function reset() {
    document.getElementById('stopwatch').textContent = 0;
    startButton.addEventListener('click', runClock);
}

startButton.addEventListener('click', runClock);
stopButton.addEventListener('click', stopClock);
resetButton.addEventListener('click', reset);

