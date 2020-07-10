import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {useContext} from 'react';
import './Button.css';

const CounterContext = React.createContext({
  clickCount : 0,
  incrementCount : () => {}
});

export const ButtonCounter : React.FC = () => {

  let countString : string = (localStorage.getItem('nrOfClicks') || '0');
  const [clickCount, setClickCount] = useState(parseInt(countString));

  useEffect(() => localStorage.setItem('nrOfClicks', clickCount.toString()), [clickCount]);

  function incrementCount()
  {
    setClickCount(clickCount + 1);
  }

  return(
    <CounterContext.Provider value={{clickCount, incrementCount}}>
      <div>
        <Button/>
        <Message/>
      </div>
    </CounterContext.Provider>

  );
}

const Button : React.FC = () => {

  const context = useContext(CounterContext);

  return(
    <button onClick={context.incrementCount} className="Button.css"> Click Me, Daddy! (UWU) </button>
  );
}

const Message : React.FC = () => {
  return(
    <div>
      <p className="Button.css">You have satisfied the button <Counter/> times!</p>
    </div>
  );
}

const Counter : React.FC = () => {

  const context = useContext(CounterContext);

  return(
    <div> {context.clickCount} </div>
  );
}