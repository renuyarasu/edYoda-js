// JavaScript - Basics to Advanced - EdYoda Digital University, Qaifi Khan
console.clear();

// ES6 - Spread Operator
/* 
let num_01 = [1, 2, 3];
let num_02 = [4, 5, 6];
num_02.push(10);
// let num = [...num_01, ...num_02]

let num = num_01.concat(num_02);

console.log(num); //[ 1, 2, 3, 4, 5, 6 ]

 */


let v_name = {
    name: 'VedaGna',
}
let v_age = {
    age: 5
}

let boy = { ...v_name, ...v_age }
console.log(boy); // { name: 'VedaGna', age: 5 }