$("#login").click(function(){
   
    var password1 = $("#pass1").val();
    var password2 = $("#pass2").val();
    
    if(password1 != "" && password2 != ""){
        
        if(password1 == password2){
            alert("Successfully login")
        }else{
            alert("Password mismatch")
        }
        
        
    }else{
        alert("Please! Enter your password")
    }
})