import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 rounded-lg border bg-white shadow-md">
      <span className={`text-lg text-gray-800 ${todo.completed ? "line-through text-gray-500" : ""}`}>
        {todo.text}
      </span>

      <div className="flex space-x-2">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`p-2 rounded-lg text-white transition duration-300 ${
            todo.completed ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {todo.completed ? "Desfazer" : "Concluir"}
        </button>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        >
          Deletar
        </button>
      </div>
    </div>
  );
};

export default TodoItem;