function changeSqr(e) {
	
	var hilight = e.currentTarget;
	hilight.style.backgroundImage = "url('imgs/square_2.png')";
	setTimeout(function(){hilight.style.backgroundImage = "url('imgs/square_1.png')";}, 500);
}

function changeTall(e) {
	
	var hilight = e.currentTarget;
	hilight.style.backgroundImage = "url('imgs/tall_2.png')";
	setTimeout(function(){hilight.style.backgroundImage = "url('imgs/tall_1.png')";}, 500);
}

function changeWide(e) {
	
	var hilight = e.currentTarget;
	hilight.style.backgroundImage = "url('imgs/wide_2.png')";
	setTimeout(function(){hilight.style.backgroundImage = "url('imgs/wide_1.png')";}, 500);
}


function Animate() {
	
	var buttons = document.getElementsByClassName("square");
	for (var i = 0; i < buttons.length; i++) {
		
		buttons[i].addEventListener("click",changeSqr);
		
	}
	
	var wide = document.getElementsByClassName("wide");
	wide[0].addEventListener("click",changeWide);
	
	var tall = document.getElementsByClassName("tall");
	tall[0].addEventListener("click",changeTall);
	
}
