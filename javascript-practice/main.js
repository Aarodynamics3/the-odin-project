const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const e1 = document.createElement('p');
e1.textContent = "Hey I'm red!";
e1.style.color = 'red';

container.appendChild(e1);

const e2 = document.createElement("h3");
e2.textContent = "I'm a blue h3!";
e2.style.color = 'blue';

container.appendChild(e2);

const e3 = document.createElement('div');
e3.style.backgroundColor = 'pink';
e3.style.borderStyle = 'solid';
e3.style.borderColor = 'black';
e3.style.borderWidth = '10px';

const e3_1 = document.createElement('h1');
e3_1.innerText = 'I\'m in a div!';

e3.appendChild(e3_1);

const e3_2 = document.createElement('p');
e3_2.innerText = "ME TOO!";

e3.appendChild(e3_2);

container.appendChild(e3);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});