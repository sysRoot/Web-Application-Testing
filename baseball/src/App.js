import React, {useState} from 'react';
import { BatterContext } from './contexts/BatterContext';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

import './App.css';

function App() {
  const [hit, setHit] = useState(0);
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [foul, setFoul] = useState(0);
  const [outs, setOuts] = useState(0);

  const hitHandler = () => {
    setHit(prevState => prevState +1)
  }
  const strikeHandler = () => {
    if (strike >= 2 ) {
      outsHandler(prevState => prevState + 1);
      setStrike(0)
    } else {
      setStrike(prevState => prevState + 1)
    }
  }
  const ballHandler = () => {
    setBall(prevState => prevState + 1)
  }
  const foulHandler = () => {
    if (strike < 2) {
      setStrike(prevState => prevState + 1)
      setFoul(prevState => prevState + 1)
    } else {
      setFoul(prevState => prevState + 1)
    }
  }
  const outsHandler = () => {
      if (outs >= 2) {
        setOuts(0)
        setFoul(0)
        setBall(0)
        setStrike(0)
        setHit(0)
      } else {
      setOuts(prevState => prevState + 1)
  }}

    return (
        <div className='App'>
            <BatterContext.Provider value={{hit, strike, ball, foul, outs, hitHandler, strikeHandler, ballHandler, foulHandler}}>
                <Dashboard />
                <Display />
            </BatterContext.Provider>
        </div>
    );
}

export default App;
