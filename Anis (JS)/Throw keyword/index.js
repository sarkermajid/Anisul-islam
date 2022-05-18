document.querySelector(".button").addEventListener("click",function(){
    var value =document.querySelector("#input").value;
    
    try{
        if (value < 5){
            throw "Input is too Low";
        }
        else if( value > 10){
            throw "Input is too High";
        }
        else{
            document.write(value);
        }
    }catch(error){
        document.write(error);
    }
});