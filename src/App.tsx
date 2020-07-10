import React, {createContext, useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import {Template2p1i} from './Templates';
//import {ButtonClicker} from './ButtonClicker';
import {ButtonCounter} from "./ButtonCounter";
import {RoverPhotos} from "./Forms";

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
    <Router>
      <div>
        <body className="App.css">
        <div>
          <nav>
            <ul>
              <li>
                <Link to = "/about-nasa"> About NASA </Link>
              </li>
              <li>
                <Link to = "/lewd-button"> Lewd Button </Link>
              </li>
              <li>
                <Link to = "/rover-photos"> RoverPhotos </Link>
              </li>
            </ul>
          </nav>
        </div>
        </body>

        <Switch>
          <Route path = "/about-nasa">
            <NASAinfo/>
          </Route>
          <Route path = "/lewd-button">
            <ButtonCounter/>
          </Route>
          <Route path = "/rover-photos">
            <RoverPhotos/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}
export default App;