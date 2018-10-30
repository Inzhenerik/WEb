var clickMe = document.getElementById('firstClick');
var	input = document.getElementsByName('add')[0];
var ul = document.getElementsByTagName('ul')[0];

clickMe.addEventListener("click", function() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("test"));
	ul.appendChild(li);
})