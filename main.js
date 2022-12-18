const currentYear = new Date().getFullYear();
document.getElementById('current-year').innerText = currentYear;

const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('input');

addToDoButton.addEventListener('click', () => {
    let para = document.createElement('p');
    para.classList.add('para-style');
    para.innerText = inputField.value;
    toDoContainer.appendChild(para);
    inputField.value = '';

    para.addEventListener('click', () =>{
        para.style.color = 'rgb(0, 128, 0)';
        para.style.textDecoration = 'line-through';
    })
    para.addEventListener('dblclick', () =>{
        toDoContainer.removeChild(para);
    })
})