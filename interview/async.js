async function isName(name){
    return 'Hello' + ' '+name;
}

const gretting=isName('Shakil');
console.log(gretting);
gretting.then(res=>console.log(res));