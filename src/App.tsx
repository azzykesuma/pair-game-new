import React, { useState } from 'react';
import './App.css';



const cardImages = [
  {"src" : "./img/helmet-1.png"},
  {"src" : "./img/potion-1.png"},
  {"src" : "./img/ring-1.png"},
  {"src" : "./img/shield-1.png"},
  {"src" : "./img/sword-1.png"},
  {"src" : "./img/scroll-1.png"},
]

interface data  {
  id: number;
  src: string;
}

function App() {
  // shuffling card
  const [Cards, setCards] = useState<data[]>([])
  const [Turns, setTurns] = useState(0)

  const shuffleCard = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({...card, id: Math.random()}))
      setCards(shuffled)
      setTurns(0)
  }
  console.log(Cards)
  return (
    <div className="App">
        <h1>Magic Match</h1>
        <button onClick={shuffleCard}>New Game</button>
    </div>
  )
}

export default App;
