import React from 'react';
import './form.css';

export default function Form() {
  return (
    <div className='main'>
    <h1>Coinbase offers an incentive of interest on certain cryptocurrency holdings on their platform. This interest is paid out daily to accounts holding eligible coins. Use the form found below to keep a log of your Algorand cryptocurrency balances with interest.</h1><br /><br />
    <div className='form'>
    <form>
      <fieldset>
        <input id='date' name='date' type='date' min='2009-01-03' max='2100-01-03' className='input' placeholder='Date' /><br />          
        <input id='time' name='time' type='time' className='input' placeholder='Time' /><br />
        <input id='morningdeposit' name='morningdeposit' type='text' className='input' placeholder='Deposit Amount' /><br />
        <input id='interest' name='interest' type='text' className='input' placeholder='Interest to Date' /><br />
        <button type="submit" className="submit">Submit</button>
      </fieldset>
    </form>
  </div>
</div>
  )
}