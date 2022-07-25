/*
const title = document.getElementById('main-heading');
console.log(title);

const itemElement = document.getElementsByClassName('list-items');
console.log(itemElement);

const listItem = document.getElementsByTagName('li');
console.log(listItem);

const container = document.querySelector('div');
console.log(container);

const containers = document.querySelectorAll('div');
console.log(containers);
*/

/*
const title =  document.querySelector('#main-heading');
title.style.color = 'red';
console.log(title);

const listItems = document.querySelectorAll('.list-items');
console.log(listItems);

listItems.forEach((item)=>{
    item.style.fontSize = '2rem';
})

*/
/*
const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);
li.innerText = 'X-men';
li.setAttribute('id','x-man-item');
li.removeAttribute('id');
li.classList.add('list-items');
li.remove();

const title = document.querySelector('#main-heading');
console.log(title.innerHTML);
*/

let ul = document.querySelector('ul');
ul.childNodes[1].style.backgroundColor = 'green';
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);