var numbers = [10,20,30,40,50]
var squareNumbers = numbers.map(function(x){
    return x*x;
});
console.log(squareNumbers);

var numbers = [10,11,24,44,33,65,7,21,99]
var Newnumbers = numbers.filter(function(x){
    return x%2!=0;
});
console.log(Newnumbers);