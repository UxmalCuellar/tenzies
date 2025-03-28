import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function Main() {
  const [dice, setDice] = useState(generateAllNewDice());
  const gameWon =
    dice.every((die) => die.isHeld === true) &&
    dice.every((die) => die.value === dice[0].value);

  function generateAllNewDice() {
    const randNumbers = Array.from({ length: 10 }, () =>
      Math.ceil(Math.random() * 6),
    );

    return randNumbers.map((num) => ({
      value: num,
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
      ),
    );
  }

  function hold(id) {
    setDice((currDice) =>
      currDice.map((d) => (d.id === id ? { ...d, isHeld: !d.isHeld } : d)),
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      isHeld={dieObj.isHeld}
      value={dieObj.value}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <>
      <main>
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>

        <div className="die-container">{diceElements}</div>
        <button className="roll-btn" onClick={rollDice}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  );
}
