import React from 'react';

import './guessInput.css';

export default function App() {
  return (
      <div class='in'>
    <form>
    <input type="text" name="firstname" placeholder='Enter a Guess'></input><br></br>
    <input   type="submit" value="Submit"></input>
  </form>
  <span class='gc'>Guess #0!</span>
  </div>
  )
}