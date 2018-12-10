import React from 'react';

import AppHeader from './appHeader';
import GuessResponce from './guessResponce';
import GuessInput from './guessInput';
import GuessHistory from './guessHistory';


import './App.css';

export default function App() {
  return (
      <div className="App">
        <header className="App-header">
        <AppHeader />
        </header>


        <section className="gamebox">
        
            <section className="guess-responce">
               <GuessResponce />
            </section>

            <section className="guess-input">
               <GuessInput />
            </section>

            <section className="guess-counter">
               <GuessHistory />
            </section>
               
        </section>

      </div>
    );
  }



