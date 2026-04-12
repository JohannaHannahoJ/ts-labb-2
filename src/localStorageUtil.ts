// Hämta Todo-interfacet
import type { Todo } from './todo';

// Klass som hanterar lagring och laddning i local storage med static metoder
export class LocalStorageUtil {
    // Spara till localstorage som JSONdata
    static saveTodos(todos: Todo[]) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    // Ladda från localstorage
    static loadTodos(): Todo[] {
        const data = localStorage.getItem("todos");
        // returnera tom array om data saknas
        if (!data) return [];
        // returnerar JSON-data som array med objekt
        return JSON.parse(data);
    }
}