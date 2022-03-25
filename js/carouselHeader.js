var roundLeft = document.getElementById("left");
var roundRight = document.getElementById("right");
var watches = document.getElementsByClassName("watches-images");
var i = 0;
var k = 0;

function funRight(){
	if(i<=4){
		i++; 		
		watches[0].children[i].style.opacity = "1";
		console.log(watches[0].children[i].getAttribute("src"));
		roundRight.setAttribute("onclick", "clickRight()");
		if(i==4){
			roundRight.removeAttribute("onclick");
			roundRight.style.background = "#f2d8b9";
		}
	}
	watches[0].children[i-1].removeEventListener('transitionend', funRight);  
}

function funLeft(){
	if(i>=0){
		i--;
		watches[0].children[i].style.opacity = "1";
		console.log(watches[0].children[i].getAttribute("src"));
		roundLeft.setAttribute("onclick", "clickLeft()");
		if(i==0){
			roundLeft.removeAttribute("onclick");
			roundLeft.style.background = "#f2d8b9";
		}
	}
	watches[0].children[i+1].removeEventListener('transitionend', funLeft);
}

function clickRight(){
	roundLeft.setAttribute("onclick", "clickLeft()");
	roundLeft.style.background = "#fff";
			
	watches[0].children[i].style.opacity = "0";	
	roundRight.removeAttribute("onclick");
	watches[0].children[i].addEventListener('transitionend', funRight); 
}

function clickLeft(){
	roundRight.setAttribute("onclick", "clickRight()");
	roundRight.style.background = "#fff";
				
	watches[0].children[i].style.opacity = "0";		
	roundLeft.removeAttribute("onclick");
	watches[0].children[i].addEventListener('transitionend', funLeft);
}