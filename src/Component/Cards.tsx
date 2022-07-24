import React, {MouseEvent, useState} from 'react'
import { cardData } from '../data/cardData'

function Cards() {
  interface item {
    id : number,
    backgroundColor : string
  }

  let targetId:number[] = []
  const [Style, setStyle] = useState('defaultCard')
  const [Click, setClick] = useState(false)

  const revealColor = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    if(target.classList.contains('defaultCard')) {
      
    }
  }

  return (
    <>
        <div className="cardContainer" onClick={revealColor}>
          {cardData.map(item => (
              <div className={Style}
              key={item.id}
              ></div>
          ))}
        </div>
    </>
  )
}

export default Cards