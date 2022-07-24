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

  const revealColor = (e:MouseEvent,item : item ) => {
    const target = e.target as HTMLInputElement;
    target.classList.add(`card${item.id}`)
    targetId.push(item.id)
    
    console.log(targetId)
    // reseting color after 2 color revealed
    if(targetId.length === 2) {
      targetId = []
    }
  }

  return (
    <>

        {cardData.map(item => (
            <div className={Style} onClick={e => revealColor(e,item)}
            key={item.id}
            ></div>
        ))}
    </>
  )
}

export default Cards