import type { Todo } from './todo'; // hämta in interface

// skapa klass
export class TodoList {
    private todos: Todo[] = []; // Array som lagrar alla objekt som följer todo-interfacet

    // konstruktor
    //constructor() {
    //    this.todos = 
    //}

    public addTodo(todo: Todo): void {
        this.todos.push(todo);
        
        console.log('Lade till todo:', todo);
        console.log('Alla todos nu:', this.todos);

        //sedan ngt för att spara till local st.
    }
}

