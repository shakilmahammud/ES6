//function
function add(){
   return 5+5;
}
const func=add();
console.log(func);
// variable function
const me=function () {
    return 5+10;
    
}
const result=me();
console.log(result);

//arrow function 
 const arrow=num=>num*5;
 const result2=arrow(10);
 console.log(result2);
 //arrow big function

 const arrowBig=num=>{
     const sum=num+5;
     const result=sum-20;
     return result;
 }
 const arrowBigResult=arrowBig(100);
 console.log(arrowBigResult);

 const give5=()=>5;
 console.log(give5());