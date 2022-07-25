// JavaScript - Basics to Advanced - EdYoda Digital University, Qaifi Khan

console.clear();

// DOM
let click = document.getElementById('click_me');
let bg = document.getElementById('bg');

function onClick() {
    alert('Hi')
};

// click.onclick = onClick;
click.addEventListener('click', function () {
    setTimeout(() => {
        bg.style.backgroundColor = 'crimson';
    }, 1000);
})