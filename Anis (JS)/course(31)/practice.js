var arrays = ["image/majid1.jpg","image/majid2.jpg","image/majid3.jpg"]
var imageTag = document.querySelector("img");

var count = 0;


function next (){
	count++;

	if (count >= arrays.length) {

		count=0;
		imageTag.src = arrays[count];
	}
	else{

		imageTag.src = arrays[count];
	}
}

function prev(){
	count--;

	if (count<0) {
		count = arrays.length - 1;
		imageTag.src = arrays[count];
	}
	else{
		imageTag.src = arrays[count];
	}
}