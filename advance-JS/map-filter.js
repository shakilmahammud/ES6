const numbers=[3,5,7,8,9,10];
const output=[];
for(let i=0; i<numbers.length;i++){
    const element=numbers[i];
   const result=element*element;
   console.log(result);
   output.push(result);
}
console.log(output);

function squre(element){
    return element*element;
}
const result1=numbers.map(function(element,index,array){
    console.log(element,index,array);
});
const result2=numbers.map(function(element){
    return element*element;
});
console.log(result2);

const result3=numbers.map(x=>x*x);
console.log(result3);
const result4=numbers.filter(x=>x<3);
console.log(result4);
const result5=numbers.find(x=>x>3);
console.log(result5);
