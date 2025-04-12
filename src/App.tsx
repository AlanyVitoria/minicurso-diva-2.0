import logo from "./assets/logo.png";
import "./App.css";
import Espelho from "./components/espelhos";
import brasil from './assets/brasil.jpg';
import cloud from './assets/cloud.jpg';
import water from './assets/water.jpg';

function App() {
  return (
    <div className="app">
      <header className="header">
        <p>uma loja de espelhos</p>
      </header>
      <div className="content">
        <Espelho image={brasil} title="Espelho Brasil" price="R$120,00"/>
        <Espelho image={cloud} title="Espelho Nuvem" price="R$90,00"/>
        <Espelho image={water} title="Espelho Gota" price="R$80,00"/>
      </div>
    </div>
  );
}

export default App;
