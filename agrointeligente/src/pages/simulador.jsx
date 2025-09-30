import React from 'react';

export default function Simulador() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="banner-content">
          <h1>Simulador</h1>
          <p>Faça simulações para sua produção agrícola.</p>
        </div>
      </header>

      <main>
        <section className="simulador-intro">
          <h2>Como funciona o simulador?</h2>
          <p>
            {/* Explique aqui como o simulador funciona */}
          </p>
        </section>

        <section className="simulador-form">
          {/* Coloque aqui o formulário ou interface do simulador */}
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
        className="agrotech-popup"
      >
        <h3>
          <span style={{ verticalAlign: "middle", marginRight: 6 }}>📰</span> Notícias AgroInteligente
        </h3>
        <div className="agrotech-news">
          <div>Evento importante hoje.</div>
          <a href="https://www.exemplo.com/noticia1" target="_blank" className="btn btn-sm ms-2 agrotech-btn">
            Ver notícia
          </a>
        </div>
        <div className="agrotech-news">
          <div>Atualização do sistema.</div>
          <a href="https://www.exemplo.com/noticia2" target="_blank" className="btn btn-sm ms-2 agrotech-btn">
            Ver notícia
          </a>
        </div>
        <div className="agrotech-news" style={{ borderBottom: "none" }}>
          <div>Novo recurso disponível.</div>
          <a href="https://www.exemplo.com/noticia3" target="_blank" className="btn btn-sm ms-2 agrotech-btn">
            Ver notícia
          </a>
        </div>
      </div>
    </>
  );
}