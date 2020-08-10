//class to object use new method

class person{
    constructor(firstName,lastName,salary){
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;

    }
}
const heroperson=new person('shakil','mahammud',1000000);
console.log(heroperson);