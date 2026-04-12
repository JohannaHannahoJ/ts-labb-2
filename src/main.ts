import { TodoList } from './todoList'; // hämta in interface


import './style.css'

const list = new TodoList();

list.addTodo({
  task: "Test 1",
  completed: false,
  priority: 1
});

list.addTodo({
  task: "Test 2",
  completed: false,
  priority: 2
});