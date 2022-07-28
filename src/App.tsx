import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card';

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
  const [FirstChoice, setFirstChoice] = useState<data | null>(null)
  const [SecondChoice, setSecondChoice] = useState<data | null>(null)

  // handling choice
  const handleChoice = (card:data) => {
    // checking the first choice val to determine the setchoise state
    FirstChoice ? setSecondChoice(card) : setFirstChoice(card)
  }

  useEffect(() => {
    if(FirstChoice && SecondChoice) {
      console.log(FirstChoice.src, SecondChoice.src)
    }
  }, [FirstChoice,SecondChoice])
  

  // reset choice
  const resetChoice = () => {
    setFirstChoice(null)
    setSecondChoice(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  const shuffleCard = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({...card, id: Math.random()}))
      setCards(shuffled)
      setTurns(0)
  }
  return (
    <div className="App">
        <h1>Magic Match</h1>
        <button onClick={shuffleCard}>New Game</button>
        <div className="card-grid">
          {Cards.map(card => (
            <Card 
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
            />
          ))}
        </div>
    </div>
  )
}

export default App;
