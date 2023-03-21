import MiApi from './MiApi';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Prueba React</h1>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' className='imagen' alt='Imagen'/>
      <MiApi/>
    </div>
  );
}

export default App;
