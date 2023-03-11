import './App.css';
import { useState } from 'react';

function App() {

const [findCoord, setFindCoord] = useState("")
const [longitude, setLongitude] = useState("")
const [latitude, setLatitude] = useState("")
const [coordinates, setCoordinates] = useState([])

const apiKey = "4d960f6c1e1c4f1c9cfd564d463b35a1"

const handleCoordChange = (event) => {
  setFindCoord(event.target.value)
}
const handleLongChange = (event) => {
  setLongitude(event.target.value)
}
const handleLatChange = (event) => {
  setLatitude(event.target.value)
}

const handleLocationSubmit = (event) => {
  event.preventDefault();

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${findCoord}&limit=5&appid=${apiKey}`)
  .then((response) => response.json())
  .then((data) => setCoordinates(data.response))
}


  return (
    <div className="App">
      <h1>Global Current Weather</h1>
      <form>
        <label>Enter City Name for Longitude and Latitude Values</label>
        <input type="text" onChange={handleCoordChange} value={findCoord} placeholder='City Name'/>
        <input type="button" value='enter'/>
      </form>
        <p></p>
        <br />
        <form>
          <label>Enter Longitutde and Latitude Values for Weather</label>
          <input type="text" onChange = {handleLongChange} value={longitude} placeholder='longitude' />
          <input type="text" onChange = {handleLatChange} value={latitude} placeholder="latitude"/>
          <input type="button" value="enter"/>
        </form>
        <p></p>
     
    </div>
  );
}

export default App;
