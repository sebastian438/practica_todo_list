import { useReducer, useEffect } from 'react';
import { todoReducer } from '../reducers/todoReducer';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const useTodoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (newTodo) => {
        dispatch({ type: '[TODO] add todo', payload: newTodo });
    };

    const handleDeleteTodo = (id) => {
        dispatch({ type: '[TODO] delete todo', payload: id });
    };

    const handleToggleTodo = (id) => {
        dispatch({ type: '[TODO] toggle todo', payload: id });
    };

    const handleUpdateTodo = ({ id, todo, description }) => {
        dispatch({ type: '[TODO] update todo', payload: { id, todo, description } });
    };

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleUpdateTodo
    };
};
