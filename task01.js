const button = document.querySelectorAll('button');
console.log(button);
const li = document.querySelector('#shopping-list');
console.log(li);

button[0].addEventListener('click',function () {
    console.log(button[0]);

    const newLi = document.createElement('li');
    li.appendChild(newLi);
    newLi.innerText = 'Chleb';
});

button[1].addEventListener('click',function () {
    console.log(button[1]);

    const del = li.lastElementChild;
    li.removeChild(del);
});

button[2].addEventListener('click', function () {
    console.log(button[2]);

    const sec = li.firstElementChild.nextElementSibling;
    const  cloneChild = sec.cloneNode(true);
    li.appendChild(cloneChild);
});
