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
        <h1>Coinbase offers an incentive of interest on certain cryptocurrency holdings on their platform. This interest is paid out daily to accounts holding eligible coins. Use the form found below to keep a log of your Algorand cryptocurrency balances with interest.</h1>
        <div className='form'>
          <form>
            <fieldset>
           
            <input id='date' type='text' className='input' placeholder='Date' /><br />
            
            <input id='time' type='text' className='input' placeholder='Time' /><br />
           
            <input id='morningdeposit' type='text' className='input' placeholder='Deposit Amount' /><br />
           
            <input id='interest' type='text' className='input' placeholder='Interest to Date' /><br />
            <button type="submit" className="submit">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    <Route exact path='/success' component={Success} />
    </main>
    
  );
}

export default App;