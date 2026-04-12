import { TodoList } from './todoList'; // hämta in interface
import './style.css'

const list = new TodoList();

const form = document.getElementById("todo-form") as HTMLFormElement;
const taskInput = document.getElementById("task") as HTMLInputElement;
const priorityInput = document.getElementById("priority") as HTMLSelectElement;
const ul = document.getElementById("todo-list") as HTMLUListElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = taskInput.value;
  const priority = Number(priorityInput.value);

  const success = list.addTodo(task, priority);

  if (!success) {
    alert("Fel input!");
    return;
  }

  renderTodos();
  form.reset();
});

function renderTodos() {
  ul.innerHTML = "";

  const todos = list.getTodos();

  todos.forEach(todo => {
    const li = document.createElement("li");
    
    li.textContent = `${todo.task} (prio ${todo.priority})`;
    ul.appendChild(li);
  });
}