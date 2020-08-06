import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonClick from './Components/buttonClick'
import DivHover from './Components/divHover';

function App() {
  return (
    <div className="App">
     <ButtonClick name="calculate click"/>
        <DivHover />
    </div>
  );
}

export default App;
