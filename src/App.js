import React, { useState } from 'react';
import Lista from './components/listaCompetencias'

function App() {
  const tasks = [];
  return (
    <div className="App">
      <Lista content={tasks}/>
    </div>
  );
}

export default App;
