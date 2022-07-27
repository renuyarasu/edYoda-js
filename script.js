// JavaScript - Basics to Advanced - EdYoda Digital University, Qaifi Khan
console.clear();


// ES6 - Rest Operator

const sum = (num0, num2, ...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[1]
    }
    console.log(sum);
}
sum(1, 2, 3, 4, 5); //12