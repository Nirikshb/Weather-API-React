import React from 'react';
import './weatherdata.css';
import LandingPage from './landingpage';


const WeatherData = (props) => {

  // const [isChecked, setIsChecked] = useState(false);
  // const handleOnChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    
    <div className='header'> 
    <h2>Weather data</h2> 
    {/* location.lon
    location.name
    location.lat
    location.current.temp_c
    location.current.temp_f
    */}
    <div className='box'>
    {/* <p>Location : {data.location.name}</p> */}
    </div>
    </div>
    
  )
}

export default WeatherData;