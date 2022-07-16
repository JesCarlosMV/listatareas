import './App.css';
import freeCodeCampLogo from "./img/freecodecamp-logo.png"
import Tarea from './components/Tarea';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <Tarea texto="texto de prueba" />
        <Tarea texto="texto de prueba" />
        <Tarea texto="texto de prueba" />
        <Tarea texto="texto de prueba" />

      </div>
    </div>
  );
}
export default App;
