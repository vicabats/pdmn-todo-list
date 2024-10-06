import React from 'react';
import TarefaEntrada from './TarefaEntrada';

const App = () => {
  const handleTarefaAdicionar = (tarefa) => {
    console.log(tarefa);
  };

  return (
    <div className="container mt-4">
      <TarefaEntrada onTarefaAdicionar={handleTarefaAdicionar} />
    </div>
  );
};

export default App;
