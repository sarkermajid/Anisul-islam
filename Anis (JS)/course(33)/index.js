
var style = document.querySelector("h2");

style.addEventListener("mouseover",function(){
	style.classList.add("my-style");
});

style.addEventListener("mouseout",function(){
	style.classList.remove("my-style");
});

document.querySelector("button").addEventListener("click",function(){
    alert("Hi,,, My name is Sarker Majid");
});