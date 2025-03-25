import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    if (editedText.trim()) {
      onEdit(todo.id, editedText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-start p-4 mb-2 rounded-lg border bg-white shadow-md space-x-3">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          className="flex-1 min-w-0 p-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
      ) : (
        <span className={`flex-1 min-w-0 overflow-hidden text-ellipsis break-words text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {todo.text}
        </span>
      )}

      <div className="flex-shrink-0 flex space-x-2">
        {!isEditing ? (
          <>
            <button
              onClick={() => onToggle(todo.id)}
              className={`p-2 rounded-lg text-white ${
                todo.completed ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-emerald-500 hover:bg-emerald-600'
              }`}
            >
              {todo.completed ? 'Desfazer' : 'Concluir'}
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Deletar
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleSave}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Salvar
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditedText(todo.text);
              }}
              className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Cancelar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;