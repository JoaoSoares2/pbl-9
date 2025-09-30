import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Contato from './pages/contato';
import Simulador from './pages/simulador';
import Sobre from './pages/sobre';
import popupNoticias from './components/popupNoticias';
import Cadastro from './pages/cadastro';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home">Início</Link> |{' '}
        <Link to="/simulador">Simulador</Link> |{' '}
        <Link to="/sobre">Sobre</Link> |{' '}
        <Link to="/contato">Contato</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
         <Route path="/cadastro" element={<Cadastro />} /> {/* Nova rota */}
      </Routes>
    </Router>
  );
}

export default App;