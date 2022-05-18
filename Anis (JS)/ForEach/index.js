var number = [10,20,30,40,50]
for (var x = 0; x < number.length; x++){
    console.log(number[x]);
};

console.log("---")

var value =[10,20,30,40,50]
value.forEach(function(x){
    console.log(x);
});

console.log("---");

var Number = [10,20,30,40,50]
var squareNumber =[];
Number.forEach(function(x){
    squareNumber.push(x*x);
});
console.log(squareNumber);

console.log("---");

var NUMBER = [10,20,30,40,50];
NUMBER.forEach(function(x,index,arr){
    arr[index] = x+5;
})
console.log(NUMBER);
