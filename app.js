var play = document.getElementById("play");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var myTime = document.getElementById("myTime");

var time = 0;
var timeGo = null;


play.addEventListener("click",playFn);
stop.addEventListener("click",stopFn);
reset.addEventListener("click",resetFn);


function playFn(){
	clearBtn();
	play.classList.add("active");
	play.removeEventListener("click",playFn);
	reset.addEventListener("click",resetFn);
	timeGo = setInterval(function(){
		time++;
	    myTime.innerHTML = time;
	},1000);
}

function stopFn(){

	clearBtn();
	stop.classList.add("active");
	clearInterval(timeGo);
	play.addEventListener("click",playFn);
}

function resetFn(){
	clearBtn();
	reset.classList.add("active");

	clearInterval(timeGo);
	reset.removeEventListener("click",resetFn);

	time = 0;
	myTime.innerHTML = time;

	setTimeout(function(){
		clearBtn();
		play.addEventListener("click",playFn);
	},1000);
}

function clearBtn(){
	play.classList.remove("active");
	stop.classList.remove("active");
	reset.classList.remove("active");
}