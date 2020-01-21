import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

import RestartButton from './components/RestartButton';


function App() {
  return (
    <div>
      
      <Board />  
      <div style={{position:'fixed',bottom:0,width:'100%'}}>
        <RestartButton/>
      </div>
      
    </div>
  );
}

export default App;
