import { useState } from 'react'

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onAdd(text)) {
      setText('')
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-form__input-wrap">
        <svg
          className="todo-form__icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        <input
          type="text"
          className="todo-form__input"
          placeholder="Ajouter une nouvelle tâche…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Nouvelle tâche"
          autoComplete="off"
        />
      </div>
      <button type="submit" className="todo-form__submit" disabled={!text.trim()}>
        Ajouter
      </button>
    </form>
  )
}
