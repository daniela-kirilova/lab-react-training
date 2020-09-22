import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/IdCard';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="card">
        <IdCard
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
        />
        <IdCard
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
        />
      </div>
      <div className="greeting">
        <Greetings lang="de" name="Ludwig" />
        <Greetings lang="fr" name="François" />
      </div>
      <div className='random'>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      </div>
    </div>
  );
}

export default App;
