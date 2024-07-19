import React, { useState } from 'react';
import '../style.css';

function Lista() {
    const [tasks, setTasks] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');

    const handleAddTask = () => {
        const newTask = { id: tasks.length + 1, text: novaTarefa };
        setTasks([...tasks, newTask]);
        setNovaTarefa('');
    };

    return (
        <div>
            <h2>Você tem estas tarefas a fazer:</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.text}</li>
                ))}
            </ul>
            
            <input
                type="text"
                id="novaTarefa"
                placeholder="Nova Tarefa..."
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
            />
            <button onClick={handleAddTask}>Adicionar Tarefa</button>
        </div>
    );
}

export default Lista;