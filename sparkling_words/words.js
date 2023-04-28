var words = ["FAMILY", "MOM", "FRIENDS","DAD", "LOVE",  "BREAKUP", "GIRLFRIEND", "BROTHER", "CRY", "BOYFRIEND", "WOMEN", "MOM", "HOME","HOSTEL","RUN","HEART"];

window.addEventListener("load", function() {
		var randoms = window.document.getElementsByClassName("randoms");
		for (i =0; i < randoms.length; i++)
				changeWord(randoms[i]);
}, false);

function changeWord(a) {
		a.style.opacity = '0.4';
		a.innerHTML = words[getRandomInt(0, words.length - 1)];
		setTimeout(function() {
				a.style.opacity = '2';
		}, 425);
		setTimeout(function() {
				changeWord(a);
		}, getRandomInt(400, 900));
}


function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) +min;
}
