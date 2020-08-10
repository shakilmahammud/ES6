//global variable
var sum=0;
const add=x=>{
    var result=x+x;//local variable 
    return result;
}
var sum=add(23);
console.log(sum);
var sum=25;
console.log(sum);
