function hackIt() {
	speed = 100; // in wpm
	inp = document.getElementsByTagName('input');
	x = document.getElementsByTagName('span');
	text = "";
	init = 0;
	end = 0;

	for (var i = 0; i < x.length; i++) {
		if (x[i].className === "lblUsername")
			init = i;
		if (x[i].className === "gwt-InlineLabel") {
			end = i;
		}
	}

	for (var i = init; i < end; i++) {
		text += x[i].innerText;
	}

	words = text.split();
	timeDelay = 60000 / speed; // for near to <100wpm


	for (var i = 0; i < words.length; i++) {
		inp[0].value = words[i] + " ";
		wait(timeDelay);
	}
}

function wait(ms) {
	var d = new Date();
	var d2 = null;
	do { d2 = new Date(); }
	while(d2-d < ms);
}

hackIt();