let sliders = document.querySelectorAll(".slider img");
let ulElement = document.querySelector(".slider-count ul");

let item;
for(i=1;i <= sliders.length;i++){
	item = document.createElement("li");
	item.setAttribute("count", i);item.setAttribute("onclick", "countfunc(" + i + ")")
	if(i == 1){item.classList.add("active-count")}
	ulElement.appendChild(item);
}

let prev = document.querySelector("a.previous");
let next = document.querySelector("a.next");
prev.setAttribute("onclick", "move('goPrev')");
next.setAttribute("onclick", "move('goNext')");
function move(dir){
	let i = 1;
	while(!document.querySelector(".slider-count ul li:nth-of-type(" + i + ")").classList.contains("active-count")){
		i++;
	}
	if(dir == "goPrev"){
		i--;
		if(i<1){i=sliders.length}
		countfunc(i);
	}
	else if(dir == "goNext"){
		i++;
		if(i>sliders.length){i=1}
		countfunc(i);
	}
}

function countfunc(countnum){
	document.querySelector(".active-slider").classList.remove("active-slider");
	document.querySelector(".active-count").classList.remove("active-count");
	document.querySelector(".slider img:nth-of-type(" + countnum + ")").classList.add("active-slider");
	document.querySelector(".slider-count ul li:nth-of-type(" + countnum + ")").classList.add("active-count");
}
setInterval(() => {
	move("goNext");
}, 5000);
