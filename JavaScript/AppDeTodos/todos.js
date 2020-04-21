var listElement =  document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = ['Fazer Café',
    'Estudar JavaScript',
    'Acessar Comunidade Da RocketSeat'
    ];

    function renderTodos(){
       for (todo of todos){
           var todosElement =  document.createElement('li');
           var todosText = document.createTextNode(todo);

           todoElement.appendChild(todosText);
           listElement.appendChild(todosElement);
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