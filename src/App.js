import './App.css';
import { useState } from 'react';

function App() {

const [findCoord, setFindCoord] = useState("")
const [longitude, setLongitude] = useState("")
const [latitude, setLatitude] = useState("")





  return (
    <div className="App">
      <h1>Global Current Weather</h1>
      <form>
        <label>Enter City Name for Longitude and Latitude Values</label>
        <input type="text" placeholder=''/>
        <p>text</p>
        <br />
        <label>Enter Longitutde and Latitude Values for Weather</label>
        <input type="text" placeholder='longitude' />
        <input type="text" placeholder="latitude"/>
        <p></p>
      </form>
    </div>
  );
}

export default App;
