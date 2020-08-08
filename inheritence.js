class parent{
    constructor(){
     this.fatherName="swegger";
    }
}
class child extends parent{
    constructor(nam){
        super();
        this.name=nam;
    }
    getFullName(){
        return this.name +" "+this.fatherName;
    }
}

const baby=new child("shakil");
console.log(baby);
const baby2=new child("ami");
console.log(baby2.getFullName());