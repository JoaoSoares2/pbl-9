import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="banner-content">
          {/* Adicione conteúdo do banner aqui, se desejar */}
        </div>
      </header>

      <nav>
        <Link to="/">Início</Link> |{' '}
        <Link to="/simulador">Simulador</Link> |{' '}
        <Link to="/sobre">Sobre</Link> |{' '}
        <Link to="/contato">Contato</Link> |{' '}
        <Link to="/cadastro">Cadastro</Link>
      </nav>

      <main>
        <section className="home-intro">
          {/* Conteúdo da introdução */}
        </section>

        <section className="home-simulador">
          {/* Conteúdo do simulador */}
        </section>

        <section className="home-servicos">
          {/* Conteúdo dos serviços */}
        </section>

        <section className="home-contato">
          {/* Conteúdo do contato */}
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          {/* Conteúdo do footer */}
        </div>
      </footer>

      {/* Pop-up de Notícias */}
      <div
        id="agrotech-popup"
        style={{
          fontFamily: "'Montserrat', Arial, sans-serif"
        }}
      >
        <h3 style={{
          marginTop: 0,
          marginBottom: 14,
          color: "#19b464",
          fontSize: "1.18em",
          fontWeight: 800,
          letterSpacing: "0.01em"
        }}>
          {/* Título do pop-up */}
        </h3>
      </div>
    </>
  );
}