//this method work process
const object={
    name:'yeamin',
    getFullName:function(){
    return 'Mr' +' '+ this.name;
    }
}
const anotherObject={
    name:'shakil',
    getFullName:function(){
        return 'Billionaire' +' '+this.name;
    }
}
console.log(object.getFullName()); 
console.log(anotherObject.getFullName());