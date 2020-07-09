import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Template2p1i} from './Templates';
//import {ButtonClicker} from './ButtonClicker';
import {ButtonCounter} from "./ButtonCounter";

const NASAinfo : React.FC = () => {
  const p1 : string = "NASA is led by Administrator Jim Bridenstine, NASA's 13th administrator.\n" +
    "              Before joining NASA, Bridenstine served in the U.S. Congress, representing Oklahoma's First Congressional District, serving on the Armed Services Committee and the Science, Space and Technology Committee.\n" +
    "              Bridenstine's career in federal service began in the U.S. Navy, flying the E-2C Hawkeye off the USS Abraham Lincoln aircraft carrier.";
  const p2 : string = "NASA's Vision: To discover and expand knowledge for the benefit of humanity.";
  const imgSource : string = "https://www.nasa.gov/sites/default/files/thumbnails/image/41007296424_e3398ea07c_o.jpg";
  return (
    <Template2p1i p1={p1} p2={p2} imgSource={imgSource}/>
  );
}
//export {NASAinfo};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonCounter/>
        <NASAinfo/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          The World shall crumble before me
        </a>
      </header>
    </div>
  );
}
export default App;