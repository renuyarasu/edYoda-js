// JavaScript - Basics to Advanced - EdYoda Digital University, Qaifi Khan

console.clear();

// DOM
let count = document.getElementById('count');
let initialCount = count.innerHTML;

setInterval(function () {
    initialCount = initialCount > 0 ? initialCount - 1 : 0;
    count.innerHTML = initialCount;
}, 1000)
