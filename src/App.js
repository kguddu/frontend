import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/todos')
            .then((response) => {
                setTodos(response.data);
            });
    }, []);

    const addTodo = (todo) => {
        axios.post('http://localhost:5000/todos', todo)
            .then((response) => {
                setTodos([...todos, response.data]);
            });
    };

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:5000/todos/${id}`)
            .then(() => {
                setTodos(todos.filter((todo) => todo._id !== id));
            });
    };

    const toggleTodo = (id) => {
        const todo = todos.find((todo) => todo._id === id);
        axios.put(`http://localhost:5000/todos/${id}`, {
            title: todo.title,
            completed: !todo.completed,
        }).then((response) => {
            setTodos(
                todos.map((todo) =>
                    todo._id === id ? { ...todo, completed: response.data.completed } : todo
                )
            );
        });
    };

    return (
        <div className='todo_container'>
            <h1>Todo List</h1>
            <AddTodo onAdd={addTodo} />
            <Todos todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
        </div>
    );
};

export default App;
