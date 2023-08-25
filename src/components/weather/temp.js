import React, { useEffect, useState } from 'react';
import Weathercard from "./weathercard";
import "./style.css";
import "./stylebg.css";
const Temp = () => {
   
const[searchValue, setSearchValue]=useState("Kolkata");
const[tempInfo,setTempInfo]=useState({});
const getWeatherInfo=async ()=>
{
 try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=e0ea8fe7d70556739ddf5770925807bf`;
    
    let res =await fetch(url);
    let data= await res.json();
    const {temp,humidity,pressure}=data.main;
    const {main:Weathermood}=data.weather[0];
    const {name} =data;
    const {speed}=data.wind;
    const {country,sunset}=data.sys;
    const myNewWeatherInfo={
        temp,
        humidity,
        pressure,
        Weathermood,
        name,
        speed,
        country,
        sunset
    };
    setTempInfo(myNewWeatherInfo);
    console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
};

useEffect(()=>
{
    getWeatherInfo();
},[]);

  return (
    <div id="bg">
     <div className="wrap">
        <div className="search">
            <input type="search"
            placeholder="search ..."
            autoFocus
            id="search" 
            className="searchTerm"
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            />

            <button className="searchButton" type="button" onClick={()=>{getWeatherInfo()}}>Search</button>
     </div>
     </div> 


    <Weathercard tempInfo={tempInfo}/>
     
    </div>
  )
}

export default Temp
