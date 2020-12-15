import React from 'react';

const FormularioLancamento = ({ adicionar }) => {
  const [data, setData] = React.useState('');
  const [titulo, setTitulo] = React.useState('');
  const [categoria, setCategoria] = React.useState('');
  const [classIndicativa, setClassIndicativa] = React.useState('');

  function submeterFormulario(e) {
    e.preventDefault();

    adicionar(data, titulo, categoria, classIndicativa);

    setData('');
    setTitulo('');
    setCategoria('');
    setClassIndicativa('');
  }

  return (
    <form onSubmit={submeterFormulario} class="row g-3">
      <div className="col-md-10">
        <label htmlFor="titulo">Título: </label>
        <input
          type="text"
          className="form-control"
          id="titulo"
          name="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="data">Data: </label>
        <input
          type="date"
          className="form-control"
          id="data"
          name="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>

      <div className="col-auto">
        <label htmlFor="categoria">Categoria: </label>
        <select
          className="form-select"
          id="categoria"
          name="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="Filme">Filme</option>
          <option value="Série">Série</option>
          <option value="Documentário">Documentário</option>
        </select>
      </div>

      <div className="col-auto">
        <label htmlFor="classIndicativa">Classificação Indicativa: </label>
        <select
          className="form-select"
          id="classIndicativa"
          name="classIndicativa"
          value={classIndicativa}
          onChange={(e) => setClassIndicativa(e.target.value)}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="Livre">Livre</option>
          <option value="10+">10+</option>
          <option value="12+">12+</option>
          <option value="14+">14+</option>
          <option value="16+">16+</option>
          <option value="18+">18+</option>
        </select>
      </div>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="submit" className="btn btn-dark">
          Adicionar Lançamento
        </button>
      </div>
    </form>
  );
};

export default FormularioLancamento;
