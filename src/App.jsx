import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Lista de Tarefas</h1>
      <TodoList />
    </div>
  );
}

export default App;