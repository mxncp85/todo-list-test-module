import { useTodos } from '../hooks/useTodos'
import TodoFilter from './TodoFilter'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function TodoApp() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    stats,
  } = useTodos()

  const progress = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0

  return (
    <div className="app">
      <div className="app__bg" aria-hidden="true" />

      <main className="app__container">
        <header className="app__header">
          <div className="app__logo">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect width="24" height="24" rx="6" fill="var(--accent)" />
              <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h1>Taskflow</h1>
          </div>
          <p className="app__tagline">Organisez vos journées, une tâche à la fois.</p>
        </header>

        <section className="card">
          <TodoForm onAdd={addTodo} />

          {stats.total > 0 && (
            <div className="progress">
              <div className="progress__bar">
                <div className="progress__fill" style={{ width: `${progress}%` }} />
              </div>
              <span className="progress__label">
                {stats.completed} sur {stats.total} terminée{stats.completed > 1 ? 's' : ''}
                <span className="progress__percent">{progress}%</span>
              </span>
            </div>
          )}

          <TodoFilter filter={filter} setFilter={setFilter} stats={stats} />

          <TodoList
            todos={todos}
            filter={filter}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />

          {stats.completed > 0 && (
            <footer className="card__footer">
              <button type="button" className="clear-btn" onClick={clearCompleted}>
                Effacer les tâches terminées
              </button>
            </footer>
          )}
        </section>
      </main>
    </div>
  )
}
