import React from 'react';
import uuid from 'react-uuid';
import FormularioLancamento from '../FormularioLancamento';
import Lancamento from '../Lancamento';

const Lancamentos = () => {
  const [lancamentos, setLancamentos] = React.useState([]);

  function adicionarLancamento(data, titulo, categoria, classIndicativa) {
    const id = uuid();
    setLancamentos([
      ...lancamentos,
      { id, data, titulo, categoria, classIndicativa },
    ]);
  }

  function removerLancamento(id) {
    setLancamentos(lancamentos.filter((lancamento) => lancamento.id !== id));
  }

  return (
    <div>
      <h1>Lançamentos</h1>

      <table className="table table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Título</th>
            <th scope="col">Categoria</th>
            <th scope="col">Classificação Indicativa</th>
          </tr>
        </thead>

        {lancamentos.map((lancamento) => (
          <Lancamento
            key={lancamento.id}
            lancamento={lancamento}
            removerLancamento={removerLancamento}
          />
        ))}
      </table>
      <hr />
      <h2>Formulário de Lançamentos</h2>
      <FormularioLancamento adicionar={adicionarLancamento} />
    </div>
  );
};

export default Lancamentos;
