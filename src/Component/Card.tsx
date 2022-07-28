import React from 'react';
import './Card.css';

function Card({card,handleChoice}:any) {

    const handleClick = (card:any) => {
        handleChoice(card)
    }
  return (
    <div>
        <div className='card'>
            <div>
                <img src={card.src} className='front' alt="cover-card" />
                <img 
                src="/img/cover.png"
                className='back'
                alt="main-img"
                onClick={handleClick}
                />
            </div>
        </div>
    </div>
  )
}

export default Card