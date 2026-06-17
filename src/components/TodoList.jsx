import TodoItem from './TodoItem'

export default function TodoList({ todos, filter, onToggle, onDelete, onEdit }) {
  if (todos.length === 0) {
    const messages = {
      all: { title: 'Aucune tâche', subtitle: 'Ajoutez votre première tâche ci-dessus' },
      active: { title: 'Rien à faire', subtitle: 'Toutes vos tâches sont terminées !' },
      completed: { title: 'Aucune tâche terminée', subtitle: 'Cochez une tâche pour la marquer comme faite' },
    }
    const { title, subtitle } = messages[filter]

    return (
      <div className="todo-empty">
        <div className="todo-empty__icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        </div>
        <p className="todo-empty__title">{title}</p>
        <p className="todo-empty__subtitle">{subtitle}</p>
      </div>
    )
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  )
}
