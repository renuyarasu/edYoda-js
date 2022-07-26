// JavaScript - Basics to Advanced - EdYoda Digital University, Qaifi Khan

console.clear();

// DOM - Form Events

let username = document.getElementById('username');
let loginForm = document.getElementById('login-form');

username.addEventListener('input', function (e) {
    var current = e.target.value;
    current = current.toUpperCase();
    console.log(current);
    username.value = current
});

username.addEventListener('focus', function () {
    console.log('Element focused!!');
})
username.addEventListener('blur', function () {
    console.log('Element blured!!');
})

loginForm.addEventListener('submit', function () {
    alert('Submited');
    e.preventDefault();
})