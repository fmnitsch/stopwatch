const start = document.getElementById('start');
const reset = document.getElementById('reset');
const timeView = document.getElementById('time');

let time = 0
let running = false;

function startStop() {
    if(!running) {
        running = true;
        increment();
        start.innerHTML = 'Stop'
    } else {
        running = false;
        start.innerHTML = 'Start'
    }
}

function resetClock() {
    time = 0;
    running = false;
    start.innerHTML = 'Start';
    timeView.innerHTML = '00 : 00 : 00';
}

function increment(){
	if(running){
		setTimeout(function(){
			time++;
			let mins = Math.floor(time / 10 / 60);
			if(mins <= 9){
				mins = "0" + mins;
			}
			let secs = Math.floor(time / 10);
			if(secs <= 9){
				secs = "0" + secs;
			}
			let tenths = Math.floor(time % 10);
			if(tenths <= 9){
				tenths = "0" + tenths;
			}
			timeView.innerHTML = mins + " : " + secs + " : " + tenths;
			increment();
		}, 100);
	}
};

start.addEventListener('click', startStop);
reset.addEventListener('click', resetClock);