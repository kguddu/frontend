import React from 'react';

const Todo = ({ todo, onDelete, onToggle }) => {
    return (
        <div>
            <h3>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo._id)}
                />
                {todo.title}
                <button onClick={() => onDelete(todo._id)}>Delete</button>
            </h3>
        </div>
    );
};

export default Todo;
