$("button").click(function(){
    $("h1").toggleClass("class1")
})

$(".button").on("mouseover",function(){
    var value = this.innerHTML;
    $("h2").text(value +" is clicked")
})