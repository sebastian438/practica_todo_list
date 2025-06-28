// src/App.jsx
import React from 'react';
import { useTodoList } from './hooks/useTodoList';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

function App() {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    handleUpdateTodo
  } = useTodoList();

  return (
    // Contenedor flex-column de 100vh
    <div className="d-flex flex-column min-vh-100">

      {/* HEADER full-width */}
      <header className="bg-success text-white py-3">
        <h1 className="text-center m-0">Práctica TodoList</h1>
      </header>

      {/* MAIN: crece para ocupar el resto del espacio */}
      <main className="container-fluid flex-grow-1 py-5">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <h4>Añadir tarea</h4>
            <TodoAdd onNewTodo={handleNewTodo} />
          </div>
          <div className="col-12 col-md-6">
            <h4>Lista de tareas</h4>
            <TodoList
              todos={todos}
              onDelete={handleDeleteTodo}
              onToggle={handleToggleTodo}
              onUpdate={handleUpdateTodo}
            />
          </div>
        </div>
      </main>

      {/* FOOTER full-width */}
      <footer className="bg-success text-white py-2">
        <p className="text-center m-0">Práctica TodoList</p>
      </footer>
    </div>
  );
}

export default App;
