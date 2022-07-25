// JavaScript - Basics to Advanced - EdYoda Digital University, Qaifi Khan

console.clear();

// DOM
let head = document.getElementById('heading');
let btn = document.getElementById('click_me');

btn.addEventListener('click', function () {
    setTimeout(() => {
        head.classList.add('big');
    }, 1000);
})