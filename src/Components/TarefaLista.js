import React from 'react';

const TarefaLista = ({tarefas}) => {
    return (
        <>
            {tarefas.length > 0 ? (
                <div className="task-div">
                    <div className="col ms-5 me-5">
                        {tarefas.map((tarefa) => (
                            <div className="task">
                                {tarefa}
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default TarefaLista;