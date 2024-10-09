import React, { useState } from 'react';
import TarefaEntrada from './Components/TarefaEntrada';
import TarefaLista from './Components/TarefaLista';

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  const handleTarefaAdicionar = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
  };

  return (
    <div className="container mt-4">
      <TarefaEntrada onTarefaAdicionar={handleTarefaAdicionar} />
      <TarefaLista tarefas={tarefas} />
    </div>
  );
};

export default App;
