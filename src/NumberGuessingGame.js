import React, { Component } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

function NumberGuessingGame(){

  const [numberToGuess, setnumberToGuess] = React.useState(null);
  const [numberOfGuesses, setnumberOfGuesses] = React.useState(0);
  const [latestGuess, setlatestGuess] = React.useState(getRandomNumber());

  const isCorrectGuess = latestGuess === numberToGuess;

  const isGameOver =
    isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  function handleGuess(guess){
    setlatestGuess(Number(guess));
    setnumberOfGuesses(numberOfGuesses+1);
  }

  function handleReset(){
    setnumberOfGuesses(null);
    setnumberOfGuesses(0);
    setlatestGuess(getRandomNumber());
  }

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      )}
      {!isGameOver && (
        <GuessMessage
          guess={state.latestGuess}
          numberToGuess={state.numberToGuess}
          numberOfGuesses={state.numberOfGuesses}
        />
      )}
    </div>
  );

}

export default NumberGuessingGame;
