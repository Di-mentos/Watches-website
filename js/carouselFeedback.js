var list = document.getElementsByClassName("feedback");
var btnLeft = document.getElementById("button-left");
var btnRight = document.getElementById("button-right");

var matrix = [];
var str = "";
var minus = "";
var current = 0;
var coordX = 0;
var num = 1229;
var counter = 1;

function onClickRight(){
	
		counter++;
		console.log("counter= " + counter)	

		btnLeft.setAttribute("onclick", "onClickLeft()");
		btnLeft.style.background = "#c1dcf9";

		matrix = (window.getComputedStyle(list[0]).transform).match(/\d+/g);
		str = window.getComputedStyle(list[0]).transform;
		for(var i=0; i<str.length; i++){
			minus = "";
			if(str[i]=="-"){
				minus = "-";
				break;
			}
		}

		coordX = parseInt(minus + matrix[4]);
		current = coordX - num;
		//console.log(matrix);
		list[0].style.transform = "matrix(1, 0, 0, 1, " + current.toString() + ", 0)";
		btnRight.removeAttribute("onclick");

		list[0].addEventListener('transitionend', function(){
			if(counter<2){
				btnRight.setAttribute("onclick", "onClickRight()");
			}
			else if(counter==2){
				btnRight.removeAttribute("onclick");
				btnRight.style.background = "#f2d8b9";
			}
		})

}

function onClickLeft(){
	counter--;
	console.log("counter= " + counter);

	btnRight.setAttribute("onclick", "onClickRight()");
	btnRight.style.background = "#c1dcf9";

	matrix = (window.getComputedStyle(list[0]).transform).match(/\d+/g);
	str = window.getComputedStyle(list[0]).transform;
	for(var i=0; i<str.length; i++){
		minus = "";
		if(str[i]=="-"){
			minus = "-";
			break;
		}
	}

	coordX = parseInt(minus + matrix[4]);
	current = coordX + num;
	//console.log(matrix);
	list[0].style.transform = "matrix(1, 0, 0, 1, " + current.toString() + ", 0)";

	btnLeft.removeAttribute("onclick");

	list[0].addEventListener('transitionend', function(){
			if(counter>0){
				btnLeft.setAttribute("onclick", "onClickLeft()");
			}
			else if(counter==0){
				btnLeft.removeAttribute("onclick");
				btnLeft.style.background = "#f2d8b9";
			}
		})

}