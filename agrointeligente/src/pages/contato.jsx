import React from 'react';

export default function Contato() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="banner-content">
          <h1>Contato</h1>
          <p>Entre em contato com a equipe AgroInteligente.</p>
        </div>
      </header>

      <main>
        <section className="contato-formulario">
          {/* Adicione aqui o formulário de contato ou informações de contato */}
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