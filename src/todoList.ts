import type { Todo } from './todo'; // hämta in interface

// skapa klass som hanterar alla todos som matas in
export class TodoList {
    private todos: Todo[] = []; // Array som lagrar alla todo-objekt

    public addTodo(task: string, priority: number): boolean {

        //kotroll så att task inte är tom
        if (task.trim() === "") {
            return false;
        }

        // kontroll för att priority har godkänt värde
        if (priority !== 1 && priority !== 2 && priority !== 3) {
            return false;
        }

        // skapar ett nytt todo-objekt enl interfacet
        const newTodo: Todo = {
            task: task,
            completed: false,
            priority: priority
        };

        this.todos.push(newTodo); // Lägg till i arrayen

        return true;
    }

    // Funktion för att markera todo som klar
    public markTodoCompleted(index: number): void {
        // koll att det finns innehåll i arrayen
        if (index < 0 || index >= this.todos.length) {
            return;
        }

        // Markera todo som klar
        this.todos[index].completed = true;
    }

    public setTodos(todos: Todo[]): void {
        this.todos = todos;
    }

    // hämtar listan av todos
    public getTodos(): Todo[] {
        return this.todos;
    }
}

