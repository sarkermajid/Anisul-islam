var photos = ["image/majid1.jpg","image/majid2.jpg","image/majid3.jpg"]
var imgTag = document.querySelector("img");

var count = 0;

function next(){
	count++;

	if(count >= photos.length){
		count = 0;
		imgTag.src = photos[count];
	}
	else{

		imgTag.src = photos[count];
	}

}

function prev(){

		count--;

	if(count < 0 ){
		count = photos.length - 1;
		imgTag.src = photos[count];
	}
	else{

		imgTag.src = photos[count];
	}

}
