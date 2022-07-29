import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card';

const cardImages = [
  {"src" : "./img/helmet-1.png", matched : false},
  {"src" : "./img/potion-1.png", matched : false},
  {"src" : "./img/ring-1.png", matched : false},
  {"src" : "./img/shield-1.png", matched : false},
  {"src" : "./img/sword-1.png", matched : false},
  {"src" : "./img/scroll-1.png", matched : false},
]

interface data  {
  id: number | null;
  src: string,
  matched : boolean;
}

function App() {
  // shuffling card
  const [Cards, setCards] = useState<data[]>([])
  const [Turns, setTurns] = useState(0)
  const [FirstChoice, setFirstChoice] = useState<data | null>(null)
  const [SecondChoice, setSecondChoice] = useState<data | null>(null)
  const [Disabled, setDisabled] = useState(false)

  // handling choice
  const handleChoice = (card:data) => {
    // checking the first choice val to determine the setchoise state
    FirstChoice ? setSecondChoice(card) : setFirstChoice(card)
  }

  // starting the game
  useEffect(() => {
    shuffleCard()
  },[])

  // comparing 2 cards
  
  useEffect(() => {

    if(FirstChoice && SecondChoice) {
      setDisabled(true)
      if(FirstChoice.src === SecondChoice.src) {
        setCards(prevCard => {
          return prevCard.map(cardItem => {
            if(cardItem.src === FirstChoice.src) {
              return {...cardItem, matched : true}
            } else {
              return cardItem
            }
          })
        })
        resetChoice()
      } else {
        setTimeout(() => resetChoice(), 500) 
      }
    }
  }, [FirstChoice,SecondChoice])

  // reset choice
  const resetChoice = () => {
    setFirstChoice(null)
    setSecondChoice(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  const shuffleCard = () => {
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({...card, id: Math.random()}))
      setFirstChoice(null)
      setSecondChoice(null)
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
            cardData={card}
            handleChoice={handleChoice}
            flipped={card === FirstChoice || card === SecondChoice || card.matched}
            disabled={Disabled}
            />
          ))}
        </div>
         <p>Turns : {Turns}</p>
    </div>
  )
}

export default App;
