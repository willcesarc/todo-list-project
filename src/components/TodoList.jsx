import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-4xl w-full mx-auto p-4 relative">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 p-2 border rounded-lg text-gray-800"
          placeholder="Nova tarefa..."
        />
        <button
          onClick={addTodo}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Adicionar
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Limpar Tudo
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Confirmar ação</h3>
            <p className="text-gray-700 mb-6">Tem certeza que deseja apagar todas as tarefas?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg border"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setTodos([]);
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Limpar Tudo
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">A Fazer</h2>
          {todos.filter(todo => !todo.completed).map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Feito</h2>
          {todos.filter(todo => todo.completed).map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;