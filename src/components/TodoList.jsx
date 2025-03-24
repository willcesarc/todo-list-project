import { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { 
      id: Date.now(), 
      text: newTask, 
      completed: false 
    }]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Digite uma tarefa..."
          className="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {tasks.map(task => (
          <div 
            key={task.id} 
            className="flex items-center p-3 border rounded hover:bg-gray-50"
          >

            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="h-5 w-5 mr-3 rounded border-gray-300 text-blue-500 focus:ring-blue-400"
            />
            
            <span 
              className={`flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
            >
              {task.text}
            </span>
            
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}