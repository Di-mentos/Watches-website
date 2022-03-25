var listLinks = document.getElementsByClassName("header-links");
var sBlock = document.getElementsByClassName("search-block");
var glass = document.getElementById("magGlass");
var str = "";
var num = 0;

document.addEventListener('click', function(){
	console.log(event.target);
})

function search(){
	str = (window.getComputedStyle(listLinks[0]).marginLeft).match(/\d+/g);
	if(window.getComputedStyle(listLinks[0]).marginLeft == "957px"){
		num = parseInt(str[0]) - 171;
		listLinks[0].style.marginLeft = num.toString() + "px";
	}
	else if(window.getComputedStyle(listLinks[0]).marginLeft != "957px"){
		num = parseInt(str[0]) + 171;
		listLinks[0].style.marginLeft = num.toString() + "px";
	}
}