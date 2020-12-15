import React from 'react';

const Lancamento = ({ lancamento, removerLancamento }) => {
  return (
    <tbody>
      <tr>
        <td>{lancamento.data}</td>
        <td>{lancamento.titulo}</td>
        <td>{lancamento.categoria}</td>
        <td>{lancamento.classIndicativa}</td>
        <td>
          <a
            href="#"
            className="badge bg-dark"
            onClick={() => removerLancamento(lancamento.id)}
          >
            Remover
          </a>
        </td>
      </tr>
    </tbody>
  );
};

export default Lancamento;
