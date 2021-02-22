import React from 'react';
import './App.css';
import Header from '../Header/header';
import { Route } from 'react-router-dom';
import Success from '../Success/success';
import Form from '../Form/form';

function App() {
  return (
    <main className='App'><br /><br />
      <Header /><br />
    <Route exact path='/success' component={Success} />
    <Route exact path='/' component={Form} />
  </main>  
  );
}

export default App;