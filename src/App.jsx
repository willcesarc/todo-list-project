import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6"></h1>
      <TodoList />
    </div>
  );
}

export default App;