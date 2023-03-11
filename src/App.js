import './App.css';
import { useState } from 'react';

function App() {

const [findCoord, setFindCoord] = useState("")
const [limit, setLimit] = useState("")
const [longitude, setLongitude] = useState("")
const [latitude, setLatitude] = useState("")
const [coordinates, setCoordinates] = useState([])

const apiKey = "4d960f6c1e1c4f1c9cfd564d463b35a1"

const handleCoordChange = (event) => {
  setFindCoord(event.target.value)
}
const handleLimitChange = (event) => {
  setLimit(event.target.value)
}
const handleLongChange = (event) => {
  setLongitude(event.target.value)
}
const handleLatChange = (event) => {
  setLatitude(event.target.value)
}

const handleLocationSubmit = (event) => {
  event.preventDefault();

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${findCoord}&limit=${limit}&appid=${apiKey}`)
  .then((response) => response.json())
  .then((data) => setCoordinates(data))

  setFindCoord("");
  console.log(coordinates);
}

const cityCoords = coordinates.map((item) => {
  return(
    <ul>
      <li>{item.name}</li>
      <li>Latitude{item.lat}</li>
      <li>Longitude{item.lon}</li>
      <li>Country{item.country}</li>
      <li>State{item.state}</li>
    </ul>
  )
})


  return (
    <div className="App">
      <h1>Global Current Weather</h1>
      <form onSubmit={handleLocationSubmit}>
        <label>Enter City Name for Longitude and Latitude Values</label>
        <input type="text" onChange={handleCoordChange} value={findCoord} placeholder='City Name'/>
        <input type="text" value={limit} onChange={handleLimitChange} placeholder='limit of results' />
        <input type="submit" value='enter'/>
      </form>
      <div>{cityCoords}</div>
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
