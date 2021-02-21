import React from 'react';
import './header.css';
import Coinbase from '../Images/coinbase.png';

export default function Header() {
  return (
    <div className='header'>
      <img src={Coinbase} alt="header" className="coinbase" />
    </div>
  )
}