// TodoAdd.js
import { useState } from 'react';

export const TodoAdd = ({ onNewTodo }) => {
    const [form, setForm] = useState({
        todo: '',
        description: ''
    });

    const { todo, description } = form;

    const handleChange = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim() || !description.trim()) return;

        const newTodo = {
            id: Date.now(),
            todo: todo.trim(),
            description: description.trim(),
            done: false,
            date: new Date()
        };

        onNewTodo(newTodo);
        setForm({ todo: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Título de la tarea"
                name="todo"
                value={todo}
                onChange={handleChange}
                className="form-control mb-2"
            />
            <textarea
                placeholder="Descripción"
                name="description"
                value={description}
                onChange={handleChange}
                className="form-control mb-2"
                rows="3"
            />
            <button type="submit" className="btn btn-success w-100">
                Añadir Tarea
            </button>
        </form>
    );
};
