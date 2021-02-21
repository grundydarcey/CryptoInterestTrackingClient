import React from 'react';
import './App.css';
import Header from '../Header/header';
import Router from 'react-router-dom';

function App() {
  return (
    <main className='App'><br /><br />
      <Header /><br />
      <div className='main'>
        <h1>Welcome to my Algorand Interest tracking page</h1>
      </div>
    </main>
  );
}

export default App;