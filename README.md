# Práctica TodoList

Una sencilla aplicación **React + Vite** que permite gestionar una lista de tareas con las siguientes funcionalidades:

- ✔️ **Añadir** nuevas tareas (título y descripción)  
- ✏️ **Editar** tareas existentes  
- ✅ **Marcar** tareas como “Pendiente” / “Finalizada”  
- 🗑️ **Eliminar** tareas  
- 💾 **Persistencia** en `localStorage`  
- 📱 **Responsive** (mobile-first) y diseño con **Bootstrap**

---

## 📂 Estructura del proyecto

    my-todo-app/
    ├── index.html            ← HTML raíz con meta viewport y carga de main.jsx
    ├── vite.config.js        ← Configuración de Vite
    ├── package.json          ← Dependencias y scripts
    ├── public/               ← Recursos estáticos (favicon, imágenes…)
    └── src/
        ├── main.jsx          ← Punto de entrada: importa Bootstrap, estilos y App
        ├── index.css         ← Reset full-height y overrides globales
        ├── App.jsx           ← Layout flex (Header / Main / Footer)
        ├── components/
        │   ├── TodoAdd.jsx   ← Formulario para crear nuevas tareas
        │   └── TodoList.jsx  ← Lista de tareas con modo ver/editar
        ├── hooks/
        │   └── useTodoList.js← Custom hook con useReducer + localStorage
        └── reducers/
            └── todoReducer.js← Reducer puro con casos: add, delete, toggle, update

---

## 🚀 Instalación y ejecución

1. Clona el repositorio:  
       git clone <URL_DEL_PROYECTO>  
       cd my-todo-app  

2. Instala dependencias:  
       # Con Yarn  
       yarn install  
       # O con npm  
       npm install  

3. Arranca el servidor de desarrollo:  
       # Con Yarn  
       yarn dev  
       # Con npm  
       npm run dev  

4. Abre tu navegador en la URL que muestre la consola (por defecto http://localhost:5173/).

---

## 🛠️ Scripts disponibles

- **dev**: inicia el servidor de desarrollo (Vite)  
- **build**: genera la carpeta `dist/` con la versión lista para producción  
- **preview**: sirve la carpeta `dist/` para previsualizar la build  

    yarn dev  
    yarn build  
    yarn preview  

---

## 🎨 Personalización de estilos

- Bootstrap ya está instalado e importado en `src/main.jsx`  
- Modifica o añade tus estilos globales en `src/index.css`  
- Para estilos específicos, crea archivos CSS, usa módulos CSS, Tailwind o Styled Components  


---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el fichero `LICENSE` para más detalles.
