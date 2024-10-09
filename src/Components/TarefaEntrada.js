import React from 'react';

const TarefaEntrada = ({ onTarefaAdicionar }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();

      if (!e.target[0].value) { return }
      
      onTarefaAdicionar(e.target[0].value);  
    }}>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control text-center"
          placeholder="Digite a descrição de uma tarefa"
          style={{ textAlign: 'center' }}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 text-center">Cadastrar Tarefa</button>
    </form>
  );
};

export default TarefaEntrada;
