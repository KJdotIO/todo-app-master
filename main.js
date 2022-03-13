//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(e){
    //This prevents the form from submitting
    e.preventDefault();

    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo)
    //Checked button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="bx bx-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="bx bx-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to list (nests in list)
    todoList.appendChild(todoDiv);
    //Clear todo input value
    todoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;
    //Delete
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animate
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });

    }

    //checkmark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}