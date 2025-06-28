import React, { useState } from 'react';

export const TodoList = ({ todos, onDelete, onToggle, onUpdate }) => {
    const [editId, setEditId] = useState(null);
    const [form, setForm] = useState({ todo: '', description: '' });

    const startEdit = (t) => {
        setEditId(t.id);
        setForm({ todo: t.todo, description: t.description });
    };
    const cancelEdit = () => setEditId(null);

    const handleChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value });
    };

    const saveEdit = (id) => {
        if (!form.todo.trim() || !form.description.trim()) return;
        onUpdate({ id, todo: form.todo.trim(), description: form.description.trim() });
        setEditId(null);
    };

    return (
        <ul className="list-group">
            {todos.map(t => (
                <li
                    key={t.id}
                    className={`list-group-item d-flex justify-content-between align-items-center
                     ${t.done ? 'list-group-item-secondary' : ''}`}
                >
                    {editId === t.id
                        ? (
                            <div className="flex-grow-1 me-3">
                                <input
                                    name="todo"
                                    value={form.todo}
                                    onChange={handleChange}
                                    className="form-control mb-1"
                                />
                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    className="form-control mb-1"
                                    rows="2"
                                />
                            </div>
                        )
                        : (
                            <div
                                onClick={() => onToggle(t.id)}
                                style={{ cursor: 'pointer' }}
                                className="flex-grow-1 me-3"
                            >
                                <strong style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
                                    {t.todo}
                                </strong>
                                <p className="mb-0">{t.description}</p>
                            </div>
                        )
                    }

                    <div>
                        {editId === t.id
                            ? (
                                <>
                                    <button
                                        className="btn btn-sm btn-primary me-2"
                                        onClick={() => saveEdit(t.id)}
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        className="btn btn-sm btn-secondary me-2"
                                        onClick={cancelEdit}
                                    >
                                        Cancelar
                                    </button>
                                </>
                            )
                            : (
                                <button
                                    className="btn btn-sm btn-primary me-2"
                                    onClick={() => startEdit(t)}
                                >
                                    Editar
                                </button>
                            )
                        }

                        <button
                            className={`btn btn-sm me-2 ${t.done ? 'btn-dark' : 'btn-success'}`}
                            onClick={() => onToggle(t.id)}
                        >
                            {t.done ? 'Finalizada' : 'Pendiente'}
                        </button>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => onDelete(t.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};
