import React from 'react';

export default function Sobre() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="banner-content">
          <h1>Sobre Nós</h1>
          <p>Conheça nosso projeto, nossa missão e a equipe por trás do AgroInteligente.</p>
        </div>
      </header>

      <main>
        <section className="sobre-funcao">
          <h2 className="section-title">Função do Projeto</h2>
          <p>
            {/* Adicione aqui o texto sobre a função do projeto */}
          </p>
        </section>
        <img
          className="img-sobre"
          src="img/agricultura-digital (1).jpg"
          alt="Equipe de tecnologia agrícola"
        />

        <section className="sobre-missao">
          <h2 className="section-title">Missão, Visão e Valores</h2>
          <div className="missao-blocos">
            {/* Adicione aqui os blocos de missão, visão e valores */}
          </div>
        </section>

        <section className="sobre-motivacao">
          <h2 className="section-title">Motivação</h2>
          <p>
            {/* Adicione aqui o texto sobre a motivação */}
          </p>
        </section>

        <section className="sobre-processo">
          {/* Adicione conteúdo sobre o processo, se houver */}
        </section>

        <section className="sobre-equipe">
          {/* Adicione conteúdo sobre a equipe, se houver */}
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
          <a href="https://www.exemplo.com/noticia1" target="_blank" rel="noopener noreferrer" className="btn btn-sm ms-2 agrotech-btn">
            Ver notícia
          </a>
        </div>
        <div className="agrotech-news">
          <div>Atualização do sistema.</div>
          <a href="https://www.exemplo.com/noticia2" target="_blank" rel="noopener noreferrer" className="btn btn-sm ms-2 agrotech-btn">
            Ver notícia
          </a>
        </div>
        <div className="agrotech-news" style={{ borderBottom: "none" }}>
          <div>Novo recurso disponível.</div>
          <a href="https://www.exemplo.com/noticia3" target="_blank" rel="noopener noreferrer" className="btn btn-sm ms-2 agrotech-btn">
            Ver notícia
          </a>
        </div>
      </div>
    </>
  );
}
