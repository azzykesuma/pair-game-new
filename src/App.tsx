import React from 'react';
import Cards from './Component/Cards';

function App() {
  return (
    <main>
      <h1>Pair Game</h1>
      <h5>Match the a pair of card</h5>

      <div className="container">
        <Cards />
      </div>
    </main>
  )
}

export default App;
