import { defineStore } from "pinia";

export const useToDoListStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0,
    }),
    actions: {
        addToDo(state, todo) {
            state.todoList.push({ ...todo, id: state.id, completed: false });
            state.id++;
        },
        removeToDo(itemId) {
            this.todoList = this.todoList.filter((object: any) => object.id !== itemId);
        }
    }
});
