// Skapa ett todo-interface

export interface Todo {
    task: string;
    completed: boolean;
    priority:  1 | 2 | 3; // Literal types
}