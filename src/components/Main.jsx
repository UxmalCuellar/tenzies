import React from 'react'
import Die from './Die'

export default function Main() {
  const value = Math.floor(Math.random() * (6 - 1 + 1) + 1)
  return (
    <>
      <main className="container">
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

        <Die value={value}/>
        <Die value={value}/>
        <Die value={value}/>
        <Die value={value}/>
        <Die value={value}/>
        <Die value={value}/>
        <Die value={value}/>
        <Die value={value}/>
        <Die value={value}/>
        <Die value={value}/>
      </main>

    </>
  )
}

