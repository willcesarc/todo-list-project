import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      addTodo: (text) => set((state) => ({
        todos: [...state.todos, { id: Date.now(), text, completed: false }]
      })),
      toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      })),
      deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
      })),
      editTodo: (id, newText) => set((state) => ({
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      })),
      clearTodos: () => set({ todos: [] })
    }),
    {
      name: 'todo-storage',
    }
  )
);

export default useTodoStore;