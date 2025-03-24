import { useState } from 'react';
import useTodoStore from '../store/useTodoStore';
import TodoItem from './TodoItem';

function TodoList() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearTodos } = useTodoStore();
  const [newTodo, setNewTodo] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nova tarefa..."
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
        />
        <div className="flex gap-3">
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Adicionar
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            Limpar Tudo
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Confirmar ação</h3>
            <p className="text-gray-300 mb-6">Tem certeza que deseja apagar todas as tarefas?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-white hover:bg-gray-700 rounded-lg border border-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  clearTodos();
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
              >
                Limpar Tudo
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">A Fazer ({todos.filter(t => !t.completed).length})</h2>
          <div className="space-y-3">
            {todos.filter(todo => !todo.completed).map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Feito ({todos.filter(t => t.completed).length})</h2>
          <div className="space-y-3">
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
    </div>
  );
}

export default TodoList;