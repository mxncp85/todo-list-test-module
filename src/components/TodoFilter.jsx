const FILTERS = [
  { id: 'all', label: 'Toutes', countKey: 'total' },
  { id: 'active', label: 'À faire', countKey: 'active' },
  { id: 'completed', label: 'Terminées', countKey: 'completed' },
]

export default function TodoFilter({ filter, setFilter, stats }) {
  return (
    <div className="todo-filter" role="tablist" aria-label="Filtrer les tâches">
      {FILTERS.map(({ id, label, countKey }) => (
        <button
          key={id}
          type="button"
          role="tab"
          aria-selected={filter === id}
          className={`todo-filter__btn ${filter === id ? 'todo-filter__btn--active' : ''}`}
          onClick={() => setFilter(id)}
        >
          {label}
          <span className="todo-filter__count">{stats[countKey]}</span>
        </button>
      ))}
    </div>
  )
}
