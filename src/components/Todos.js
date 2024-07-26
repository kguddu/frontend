import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, onDelete, onToggle }) => {
    return (
        <div>
            {todos.map((todo) => (
                <Todo
                    key={todo._id}
                    todo={todo}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default Todos;
