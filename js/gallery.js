var gallery = document.getElementsByClassName("gallery");
var matrix = [];
var str = "";
var minus = "";
var number = 0;
var curCoord = 0;
var mouseX = 0;
var previous = 14; 
var sumPosNum = 0;

function func(){
	matrix = (window.getComputedStyle(gallery[0]).transform).match(/\d+/g);
	str = window.getComputedStyle(gallery[0]).transform;
	for(var i=0; i<str.length; i++){
		minus = "";
		if(str[i]=="-"){
			minus = "-";
			break;
		}
	}
	curCoord = parseInt(minus + matrix[4]); 
	mouseX = parseInt((event.clientX)/45); 
	

	if(mouseX > previous){
		sumPosNum = curCoord + mouseX;
		previous = mouseX;
	}
	if(mouseX < previous){
		sumPosNum = curCoord - mouseX;
		previous = mouseX;
	}
	console.log("sumPosNum= " + sumPosNum);
	gallery[0].style.transform = "matrix(1, 0, 0, 1, " + sumPosNum.toString() + ", 0)";
}

gallery[0].addEventListener('mousedown', function(){
	if(event.which == 1){
		console.log("mousedown is active!");
		gallery[0].style.cursor = "grabbing";
		gallery[0].style.userSelect = "none"; 
		func();	
		gallery[0].setAttribute("onmousemove", "func()");
	}
})

gallery[0].addEventListener('mouseup', function(){
	if(event.which == 1){
		console.log("mouseup is active!");
		gallery[0].style.cursor = "grab";
		gallery[0].removeAttribute("onmousemove");	
	}
})

