import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;