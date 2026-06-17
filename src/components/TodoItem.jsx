import { useEffect, useRef, useState } from 'react'

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
      inputRef.current?.select()
    }
  }, [isEditing])

  const handleSave = () => {
    if (onEdit(todo.id, editText)) {
      setIsEditing(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') {
      setEditText(todo.text)
      setIsEditing(false)
    }
  }

  return (
    <li className={`todo-item ${todo.completed ? 'todo-item--completed' : ''}`}>
      <button
        type="button"
        className="todo-item__checkbox"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Marquer comme non terminée' : 'Marquer comme terminée'}
        aria-pressed={todo.completed}
      >
        {todo.completed && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>

      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          className="todo-item__edit"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          aria-label="Modifier la tâche"
        />
      ) : (
        <span
          className="todo-item__text"
          onDoubleClick={() => setIsEditing(true)}
          title="Double-cliquez pour modifier"
        >
          {todo.text}
        </span>
      )}

      <div className="todo-item__actions">
        {!isEditing && (
          <button
            type="button"
            className="todo-item__action"
            onClick={() => setIsEditing(true)}
            aria-label="Modifier"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        )}
        <button
          type="button"
          className="todo-item__action todo-item__action--delete"
          onClick={() => onDelete(todo.id)}
          aria-label="Supprimer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      </div>
    </li>
  )
}
