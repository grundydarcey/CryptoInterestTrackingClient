import React from 'react';
import './App.css';
import Header from '../Header/header';
import { Route } from 'react-router-dom';
import Success from '../Success/success';

function App() {
  return (
    
    <main className='App'><br /><br />
      <Header /><br />
      <div className='main'>
        <h1>Welcome to my Algorand Interest tracking page</h1>
      </div>
    <Route exact path='/success' component={Success} />
    </main>
    
  );
}

export default App;