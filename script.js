// JavaScript - Basics to Advanced - EdYoda Digital University, Qaifi Khan
console.clear();

// ES6 - Classes

//Object
/* function Person(name, dob) {
    this.name = name;
    this.dob = dob;
    this.getDetails = function () {
        return `Name: ${this.name}, Age: ${this.dob}`
    }
} */


//Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails = () => {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


var veda = new Person('Veda', 5);
var gnapika = new Person('Gnapika', 7);
console.log(veda.getDetails());
console.log(gnapika.getDetails());
