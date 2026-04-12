import type { Todo } from './todo'; // hämta in interface

// skapa klass
export class TodoList {
    private todos: Todo[] = []; // Array som lagrar alla objekt som följer todo-interfacet

    // konstruktor
    //constructor() {
    //    this.todos = 
    //}

    public addTodo(task: string, priority: number): boolean {

        if (task.trim() === "") {
            return false;
        }

        if (priority !== 1 && priority !== 2 && priority !== 3) {
            return false;
        }

        const newTodo: Todo = {
            task: task,
            completed: false,
            priority: priority
        };

        this.todos.push(newTodo);

        console.log("Alla att göra: ", this.todos);

        return true;


        //sedan ngt för att spara till local st.

        
    }
    
    public getTodos(): Todo[] {
        return this.todos;
    }
}

