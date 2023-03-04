import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    const [inputCity, setInputCity] = useState("");
    const [data,setData] = useState([{}]);
    
    const apiKey = "a59413e481c8458eb8f85008230403";
    
   const weatherInfo = (city)=>{
    if(!city) return  
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`
    axios.get(apiUrl).then((res)=>{
      console.log("res", res.data);
      setData(data)
    }).catch((err)=>{
      console.log("err", err);
    })
   }

   useEffect(()=>{
    weatherInfo()
   }, [])
   
    const handleOnChange = (event)=>{
      setInputCity(event.target.value);
    }
   
    const handleSearch = ()=>{
     weatherInfo(inputCity);
    };
 
    return (
    <section
    style={{backgroundColor:'black', height:'100vh', width:'100%'}}    >
    <div className="container" >
    <h1>Weather Api</h1>
    <input
    type="text"
    placeholder="Location"
    value={inputCity}
    onChange={handleOnChange}>
    </input><br></br>    

    <Link to="/weatherdata">
    <button
    onClick={handleSearch}>
    Search</button>
    </Link>    
   
    </div>
    </section>
  )
};

export default LandingPage;