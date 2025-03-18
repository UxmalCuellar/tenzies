import { useState } from 'react'
import Die from './Die'

export default function Main() {
  const [dice, setDice] = useState(generateAllNewDice())
  const diceElements = dice.map(number => <Die value={number}/> )

  function generateAllNewDice() {
    return Array.from({length: 10}, () => Math.ceil(Math.random() * 6))
  }
  function rollDice() {
    setDice(generateAllNewDice)
  }

  return (
    <>
      <main>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

        <div className="die-container">

          {diceElements}
        </div>
        <button className="roll-btn" onClick={rollDice}>Roll</button>
      </main>

    </>
  )
}

