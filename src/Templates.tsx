import React from 'react';
const Template2p1i : React.FC<{p1 : string, p2 : string, imgSource : string}> = (props) => {
  return (
    <div>
      <p>
        {props.p1}
        <img src={props.imgSource}></img>
      </p>
      <p>
        {props.p2}
      </p>
    </div>
  );
}

export {Template2p1i};