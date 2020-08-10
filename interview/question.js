const newPerson={
    firstName:"Shakil",
    lastName:"Mahammud",
    salary:150000,
    getFullName:function(){
        console.log(this.firstName,this.lastName);
    },
    changeBill(amount){
        this.salary=this.salary-amount;
        return this.salary;

    }
}
newPerson.changeBill(150);
console.log(newPerson.salary);
console.log(newPerson);
const heroPerson={
    salary:25000,
}
const heroChargeBill=newPerson.changeBill.bind(heroPerson);//use bind method
heroChargeBill(3000);
heroChargeBill(2000);
console.log(heroPerson.salary);
const heroChargeBill1=newPerson.changeBill.call(heroPerson,900);//use call method use
console.log(heroChargeBill1);

const heroChargeBill2=newPerson.changeBill.call(heroPerson,[10]);//use apply method 
console.log(heroChargeBill2);
