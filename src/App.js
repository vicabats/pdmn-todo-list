import React from 'react';
import TarefaEntrada from './Components/TarefaEntrada';
import TarefaLista from './Components/TarefaLista';

const App = () => {
  const tarefas = ['Preparar aula de programação', 'Fazer feira', 'Preparar marmitas'];

  const handleTarefaAdicionar = (tarefa) => {
    console.log(tarefa);
  };

  return (
    <div className="container mt-4">
      <TarefaEntrada onTarefaAdicionar={handleTarefaAdicionar} />
      <TarefaLista tarefas={tarefas} />
    </div>
  );
};

export default App;
