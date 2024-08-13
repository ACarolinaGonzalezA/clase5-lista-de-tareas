import { useState } from 'react'
import './App.css'
import TaskButton from './Components/TaskButton';
import TaskList from './Components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
    <h1>Actividades del día</h1>
      <TaskButton task="Comida animales" onAddTask={addTask} />
      <TaskButton task="Actividad Física" onAddTask={addTask} />
      <TaskButton task="Desayuno y ducha" onAddTask={addTask} />
      <TaskButton task="Escribir PES Silletero" onAddTask={addTask} />
      <TaskButton task="Juego perros" onAddTask={addTask} />
      <TaskButton task="Juego Toño" onAddTask={addTask} />
      <TaskButton task="Estudiar Ingles" onAddTask={addTask} />
      <TaskButton task="Estudiar DH" onAddTask={addTask} />
      <TaskButton task="Clase DH" onAddTask={addTask} />
      <TaskButton task="Lectura y Desacanso" onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
