const counter = document.querySelector('.counter');
const btn = document.querySelector('.buttons');
const secondsInput = document.getElementById('seconds');
const btnReStart = document.getElementById('restart');
const time_date = document.querySelector('.time-date');
var seconds;
var minuts;
var remseconds;
var toCount;

var d = new Date();
time_date.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
setInterval(myFunction, 1000);
function myFunction() {
    d = new Date();
    time_date.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
function subm(){
    display("submit", "start");
    seconds = Number(secondsInput.value);
    secondsInput.style.display = "none";
    counting();
}

function display(first, second){
	document.getElementById(first).style.display = "none";
	document.getElementById(second).style.display = "block";
}

function check(stat){
	toCount = stat.value;
	if(stat.id == "start"){
		display("start", "stop");
	}
	else if(stat.id == "stop"){
		display("stop", "continue");
	}
	else{
		display('continue', "stop");
	}
}

function count(){
	if(seconds > 0){
       if(toCount == true){
            seconds--;
            remseconds = seconds % 60;
            minuts = Math.floor(seconds / 60);

            if(remseconds < 10){
       	        remseconds = "0" + remseconds;
            }

            if(minuts < 10){
       	        minuts = "0" + minuts;
            }

            counter.innerHTML = minuts + " : " + remseconds;
       }
	}
	else{
		counter.innerHTML = "Done!";
		btn.style.opacity = '0';
        btnReStart.style.display = "block";
	}
}

function counting(){
	remseconds = seconds % 60;
minuts = Math.floor(seconds / 60);

if(remseconds < 10){
    remseconds = "0" + remseconds;
}

if(minuts < 10){
    minuts = "0" + minuts;
}

counter.innerHTML = minuts + " : " + remseconds;
   setInterval(count, 1000);
}

btnReStart.addEventListener('click', ()=>{location.reload()});