import { TodoList } from './todoList'; // hämta in klassen TodoList
import { LocalStorageUtil } from './localStorageUtil'; // hämta in klassen LocalstorageUtil
import './style.css'

// skapar instans av Todolist
const list = new TodoList();

// Läser in todos från localStorage
const saved = LocalStorageUtil.loadTodos();
// skapar en lista
list.setTodos(saved);

// hämta DOM-element
const form = document.getElementById("todo-form") as HTMLFormElement;
const taskInput = document.getElementById("task") as HTMLInputElement;
const priorityInput = document.getElementById("priority") as HTMLSelectElement;
const ul = document.getElementById("todo-list") as HTMLUListElement;

// skriv ut listan
renderTodos();

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

    const todos = list.getTodos();

    // loopar igenom och skriver ut HTML för varje todo
    todos.forEach((todo, index) => {
        const li = document.createElement("li");

        //Checkbox-element att klicka i vid avklarad todo
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        // eventlyssnare på checkbox
        checkbox.addEventListener("change", () => {
            list.markTodoCompleted(index);
            LocalStorageUtil.saveTodos(list.getTodos());
            renderTodos();
        });

        // skriv ut texten
        const text = document.createElement("span");
        text.textContent = `${todo.task} (prio ${todo.priority})`;

        // text överstruken om klar
        if (todo.completed) {
            text.classList.add("completed");
        }

        // lägg till checkbox och text i li
        li.appendChild(checkbox);
        li.appendChild(text);

        ul.appendChild(li); // lägg till i listan
    });
}