const array0=[20,30,35,40];
const array1=[35,40,45,50];
const array2=[25,30,35,48];
const arrayAll=array0.concat(array1).concat([5]).concat(array2);
console.log(arrayAll);
//threeDots
const mainArray=[...array0,...array1,5,...array2];
//array max
const maxArray=Math.max(...mainArray);
console.log(maxArray);