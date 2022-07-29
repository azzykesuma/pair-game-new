import React from 'react';
import './Card.css';

function Card({cardData,handleChoice,flipped,disabled}:any) {

    const handleClick = () => {
        if(!disabled) {
            handleChoice(cardData)
        }
    }
  return (
    <div>
        <div className='card'>
            <div className={flipped ? 'flipped' : ''}>
                <img src={cardData.src} className='front' alt="cover-card" />
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