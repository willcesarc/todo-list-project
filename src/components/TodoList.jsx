import { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma tarefa..."
          className="flex-1 p-2 border rounded-l focus:outline-none"
          onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div className="mt-4 space-y-2">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center p-3 border rounded">
            <span className="flex-1">{task.text}</span>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}