import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
const ButtonClicker : React.FC = () => {
    let countString : string = (localStorage.getItem('nrOfClicks') || '0');
    const [clickCount, setClickCount] = useState(parseInt(countString));
    useEffect(() => localStorage.setItem('nrOfClicks', clickCount.toString()), [clickCount]);
    function incrementCount()
    {
        setClickCount(clickCount + 1);
    }
    return(
        <div>
            <h1>You clicked the Button {clickCount} times</h1>
            <button onClick = {incrementCount}> Click Me, Daddy! (UWU) </button>
        </div>
    );
};
export {ButtonClicker};