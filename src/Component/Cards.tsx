import React from 'react'
import { cardData } from '../data/cardData'

function Cards() {

  return (
    <>
        {cardData.map(item => (
            <div className="card" onClick={e => {
                const target = e.target as HTMLInputElement;
                target.style.backgroundColor = item.backgroundColor
            }}
            key={item.id}
            ></div>
        ))}
    </>
  )
}

export default Cards