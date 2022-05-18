
for (var i = 0; i < 3; i++){

	document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
		var text = this.innerHTML;
		console.log(text);
		audioplay(text);
		playAnimation(text);
	});
}



	document.addEventListener("keypress",function(event){

		var text = event.key;
		audioplay(text);
		playAnimation(text);
	});

		function audioplay(text){
			
				switch (text) {
					case "a":
						var audio = new Audio("sounds/a.mp3");
						audio.play();
						break;


					case "b":
						var audio = new Audio("sounds/b.mp3");
						audio.play();
						break;


					case "c":
						var audio = new Audio("sounds/c.mp3");
						audio.play();
						break;
				}
		}

		function playAnimation(text){
			var selectedButton = document.querySelector("."+text);

			selectedButton.classList.add("anim");





			setTimeout(function(){
				selectedButton.classList.remove("anim");


			},500)
		}
