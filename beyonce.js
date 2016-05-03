// Get songs & put into array
var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var song4 = document.getElementById("song4");

var songList = [song1, song2, song3, song4];
// Randomly pick song to play
var currentSong = songList[Math.floor(Math.random()*songList.length)];

// Functions for playing audio
function playSong() {
	currentSong.play();
}

function pauseSong() {
	currentSong.pause();
}

function newSong() {
	currentSong.pause();
	currentSong = songList[Math.floor(Math.random()*songList.length)];
	currentSong.play();
}

// Song Event Listeners
document.getElementById("play").addEventListener("click", playSong);
document.getElementById("pause").addEventListener("click", pauseSong);
document.getElementById("next").addEventListener("click", newSong);

// Audio Clip Functions
function playJayz() {
	var jayz = document.getElementById("jayz");
	jayz.play();
}
function playHey() {
	var hey = document.getElementById("hey");
	hey.play();
}
function playSwag() {
	var swag = document.getElementById("swag");
	swag.play();
}
function playWhoa() {
	var whoa = document.getElementById("whoa");
	whoa.play();
}
function playAlarm() {
	var alarm = document.getElementById("alarm");
	alarm.play();
}
function playDiva() {
	var diva = document.getElementById("diva");
	diva.play();
}
function playGirls() {
	var girls = document.getElementById("girls");
	girls.play();
}
function playFlawless() {
	var flawless = document.getElementById("flawless");
	flawless.play();
}

// Audio Clip Event Listeners 
document.getElementById("heart").addEventListener("click", playJayz);
document.getElementById("cake").addEventListener("click", playHey);
document.getElementById("hotsauce").addEventListener("click", playSwag);
document.getElementById("ring").addEventListener("click", playWhoa);
document.getElementById("clock").addEventListener("click", playAlarm);
document.getElementById("lipstick").addEventListener("click", playDiva);
document.getElementById("girlIcon").addEventListener("click", playGirls);
document.getElementById("crown").addEventListener("click", playFlawless);


// Get Images
var lemon1 = document.getElementById("lemon1");
var lemon2 = document.getElementById("lemon2");

// Animation Functions
function animate() {
	if (lemon1.style.animationPlayState == "paused" &&
		lemon2.style.animationPlayState == "paused") {
		lemon1.style.animationPlayState = "running";
		lemon2.style.animationPlayState = "running";
		}
	if (currentSong == song1) {
		lemon1.className = "animation1";
		lemon2.className = "animation1";
	} if (currentSong == song2) {
		lemon1.className = "animation2";
		lemon2.className = "animation2";
	} if (currentSong == song3) {
		lemon1.className = "animation3";
		lemon2.className = "animation3";
	} if (currentSong == song4) {
		lemon1.className = "animation4";
		lemon2.className = "animation4";
	}
}

function animateNext() {
	if (lemon1.style.animationPlayState == "paused" &&
		lemon2.style.animationPlayState == "paused") {
		lemon1.style.animationPlayState = "running";
		lemon2.style.animationPlayState = "running";
	}
}

function stop() {
	lemon1.style.animationPlayState = "paused";
	lemon2.style.animationPlayState = "paused";	
}

// Event listeners 
document.getElementById("play").addEventListener("click", animate);
document.getElementById("pause").addEventListener("click", stop);
document.getElementById("next").addEventListener("click", animateNext);

