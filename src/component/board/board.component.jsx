import React, { useState } from 'react'
import { StyledBoard, StyledBoardWrapper } from './board.style'
import Slot from '../slot'
import Ball from '../ball'
import Selected from '../selected'

const Board = () => {
  const [selected, setSelected] = useState(null)
  const [message, setMessage] = useState('')
  const [ winner, setWinner ] = useState({ animationPlayState: 'paused' })
// console.log(winner)
  const length = 18

  const slotList = [
    {
      number: '0',
      rotation: 0,
      color: 'green',
    },
    ...Array.from({ length }, (_, key) => key + 1).map(n => ({
      number: n + '',
      rotation: ~~(360 / 38 * n * 100) / 100,
      color: n % 2 ? 'black' : 'red',
    })),
    {
      number: '00',
      rotation: 180,
      color: 'green',
    },
    ...Array.from({ length }, (_, key) => key + 19).map(n => ({
      number: n + '',
      rotation: ~~(360 / 38 * (n + 1) * 100) / 100,
      color: n % 2 ? 'red' : 'black',
    })),
  ]
// console.log(slotList)

  const showMessage = (win, multiplier) => {
    if(win) {
      setMessage(`You won £${multiplier * 10}`)
    } else {
      setMessage(`You lost £${multiplier * 10}`)
    }
  }

  const spinIt = () => {
    const randomNumber = Math.round(Math.random() * 37);
    setWinner({ 
      ...slotList[randomNumber], 
      animationPlayState: 'running',
      rotation: slotList[randomNumber].rotation + (360 * (~~(Math.random() * 7) + 3))
    })
    console.log(slotList[randomNumber],selected)
    const { key, multiplier } = selected;
    if(['even', 'odd'].includes(key)){
      const object = {
        0: 'even',
        1: 'odd',
      }
      showMessage(object[+slotList[randomNumber].number % 2] === key, multiplier)
    } else if(['black', 'red'].includes(key)){
      showMessage(slotList[randomNumber].color === key, multiplier)
    } else {
      const keyPieces = key.split(',')
      console.log(keyPieces)
      showMessage(keyPieces.includes(slotList[randomNumber].number), multiplier)
    }
  }

  const handleSelect = (key, multiplier) => {
    setSelected({key, multiplier})
    // console.log(selected)
  }

  return (
    <StyledBoardWrapper>
      <StyledBoard size={350} >
        {slotList.map(slot => <Slot key={slot.number} {...slot} />)}
      </StyledBoard>
      <Ball winner={winner}/>
      <div>{message}</div>
      {selected && <button onClick={spinIt}>Spin it</button>}
      <Selected slotList={slotList} handleSelect={handleSelect} />
    </StyledBoardWrapper>
  )
}

export default Board
