import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Minha Lista</h1>
      <TodoList />
    </div>
  );
}