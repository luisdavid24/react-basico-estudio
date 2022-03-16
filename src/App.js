import logo from './logo.svg';
import './App.css';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
//import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';

 

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      <ContadorHooks titulo="seguidores"/>
      <hr/>
      <ScrollHooks/>
      <hr/>
      <RelojHooks/>
      <hr/>
      {/* <AjaxHookss/> */}
      <hr/>
      <HooksPersonalizados/>
      <hr/>
      <Referencias/>
      <hr/>
      <Formularios/>
      <hr/>
      <Estilos/>
      <hr/>
      </header>

    </div>
    </>
  );
}

export default App;
