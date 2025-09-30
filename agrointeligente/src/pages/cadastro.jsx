import React from 'react';

export default function Cadastro() {
  return (
    <main>
      <h1>Cadastro</h1>
      {/* Adicione aqui seu formulário de cadastro */}
      <form>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" name="senha" required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}