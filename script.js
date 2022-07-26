// JavaScript - Basics to Advanced - EdYoda Digital University, Qaifi Khan
console.clear();

// DOM - Create HTML Elements 

let list = document.getElementById('todo-list');
let btnAdd = document.getElementById('add-item');

btnAdd.addEventListener('click', function () {
    let newListElement = document.createElement('li');
    let textNode = document.createTextNode('List Item ' + (list.childElementCount + 1));
    newListElement.appendChild(textNode);
    newListElement.id = 'item' + (list.childElementCount + 1);

    list.appendChild(newListElement);
    console.log(list.childElementCount);
})
