export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
            <input 
                type="checkbox" 
                checked="todo.completed" 
                onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}
            </label>
            <button 
                className="btn btn-danger"
                onClick={() => deleteTodo(id)}
            >
                Delete
            </button>
      </li>
    )
}