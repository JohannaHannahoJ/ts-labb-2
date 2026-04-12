import { TodoList } from './todoList'; // hämta in klassen TodoList
import { LocalStorageUtil } from './localStorageUtil'; // hämta in klassen LocalstorageUtil
import './style.css'

// skapar instans av Todolist
const list = new TodoList();

// Läser in alla att-göra objekt från localStorage till listan
const saved = LocalStorageUtil.loadTodos();
saved.forEach(todo => {
    list.addTodo(todo.task, todo.priority);
});

// hämta DOM-element
const form = document.getElementById("todo-form") as HTMLFormElement;
const taskInput = document.getElementById("task") as HTMLInputElement;
const priorityInput = document.getElementById("priority") as HTMLSelectElement;
const ul = document.getElementById("todo-list") as HTMLUListElement;

// Mata in ny att-göra-sak vid klick
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Hämtar värden från input-fält
    const task = taskInput.value;
    const priority = Number(priorityInput.value);

    // lägg till i class
    const success = list.addTodo(task, priority);

    // felmeddelande om det inte fungerar att lägga till
    if (!success) {
        alert("Fel input!");
        return;
    }

    // spara i localStorage
    LocalStorageUtil.saveTodos(list.getTodos());

    // uppdatera lista
    renderTodos();
    // rensa formulär
    form.reset();
});

// funktionen som skriver ut att-göra-listan (eg renderar om den)
function renderTodos() {
    ul.innerHTML = ""; // blåser ev tidigare lista

    // Hämtar alla todos från class
    const todos = list.getTodos();

    // loopar igenom och skriver ut HTML för varje todo
    todos.forEach(todo => {
        const li = document.createElement("li");

        li.textContent = `${todo.task} (prio ${todo.priority})`;
        ul.appendChild(li);
    });
}