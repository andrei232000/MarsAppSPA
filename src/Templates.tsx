import React from 'react';
import './Templates.css';

const Template2p1i : React.FC<{p1 : string, p2 : string, imgSource : string}> = (props) => {



  return (
    <div>
      <p>
        {props.p1}
        <img src={props.imgSource} className="Templates.css"></img>
      </p>
      <p>
        {props.p2}
      </p>
    </div>
  );
}

export {Template2p1i};