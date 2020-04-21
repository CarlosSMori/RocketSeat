
var listElement =  document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Estudar JavaScript',
    'Acessar Comunidade Da Rocketseat'
];

    function renderTodos(){
        listElement.innerHTML = '';

       for (todo of todos){
           console.log()
           var todoElement =  document.createElement('li');
           var todoText = document.createTextNode(todo);
           todoElement.appendChild(todoText); 
           listElement.appendChild(todoElement);
       } 
    }

    renderTodos();

    function addTodo(){
        var todoText = inputElement.value;

        todos.push(todoText);
        inputElement.value = "";
        renderTodos();
    }

    buttonElement.onclick = addTodo;