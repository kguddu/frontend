import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({ title });
        setTitle('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Add Todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;
