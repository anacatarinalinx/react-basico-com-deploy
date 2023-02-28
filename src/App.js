import './App.css';
import {Perfil, Bio, LinkLinKedin} from './perfil.js';

function App() {
  return (
    <div>
        <Perfil meuNome="Sou Adriela Kari Oliveria da Silva, 
        filha de Marcos Gustavo e Ana Catarina" imgperfil='perfil.jpg' />
        <br />
        <Bio />
        <br /><br />
        <LinkLinKedin />
      </div>
  );
}

export default App;
