function Lista ({content}) {

    return (
        <div>
            <h2>Você tem estes componentes a fazer:</h2>
            <ul>
                {content.map(task => (
                <li key={task.id}>{task.text}</li>
            ))}
            </ul>
            
        </div>
    );
};

export default Lista;