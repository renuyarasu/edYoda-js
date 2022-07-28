// JavaScript - Basics to Advanced - EdYoda Digital University, Qaifi Khan
console.clear();

// ES6 - Destructuring
/* 
with Array
let fullname = 'Veda Bhadragava Sai';
let nameArr = fullname.split(' ')

console.log(nameArr);
let firstname = nameArr[0];
let middlename = nameArr[1];
let lastname = nameArr[2]; 

let [firstname, middlename, lastname] = nameArr;

console.log(firstname);
console.log(middlename);
console.log(lastname);

*/
// with Objects
const person = {
    firstname: 'VedaGna',
    middlename: 'Bhadragava',
    lastname: 'Sai',
    age: 5,
}
let { firstname, middlename, lastname } = person;

console.log(person.firstname);
console.log(person.middlename);
console.log(person.lastname);
console.log(person.age);
