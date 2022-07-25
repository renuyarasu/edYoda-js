// JavaScript - Basics to Advanced - EdYoda Digital University, Qaifi Khan

console.clear();

// DOM
let head = document.getElementById('heading');
let decrease = document.getElementById('btn-decrease');
let increase = document.getElementById('btn-increase');
let initialFontSize = window.getComputedStyle(head).fontSize;
initialFontSize = parseInt(initialFontSize.substring(0, (initialFontSize.length - 2)));

increase.onclick = function () {
    initialFontSize += 10;
    head.style.fontSize = initialFontSize + 'px';
}

decrease.addEventListener('click', function () {
    initialFontSize -= 10;
    head.style.fontSize = initialFontSize + 'px';
})