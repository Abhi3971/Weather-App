import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import Alert from '@mui/material/Alert';
import './Search_box.css';


export default function Search_box({update}) {
    let [City, setCity] = useState("");
    let [err , seterr]  = useState(false)

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_Key = "65f202d5751b55418d4affffe29557e5";

    let Wheater = async() => {
        try {
        let response = await fetch(`${API_URL}?q=${City}&appid=${API_Key}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result ={
            city : City,
            temp : jsonResponse.main.temp,
            maxtemp : jsonResponse.main.temp_max,
            mintemp : jsonResponse.main.temp_min,
            humidity : jsonResponse.main.humidity,
            felllike : jsonResponse.main.feels_like,
            wheater : jsonResponse.weather[0].description,
            wind : jsonResponse.wind.speed,
        };
        console.log(result);
        return result;}
        catch(err){
            throw err;
        }
    }


    let handle = (evt) => {
        setCity(evt.target.value);
    }

    let submit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(City);
        setCity("");
        let newinfo = await Wheater();
        update(newinfo);}
        catch(err){
            seterr(true);
        }
    }

    return (
        <div className='search_box'>
            <form onSubmit={submit}>
                <TextField id="search" label="City" variant="outlined" value={City} onChange={handle} htmlFor="searchbox" /> <br /><br />
                <Button variant="contained" type="Submit" id="searchbox" >
                    Search
                </Button>

            </form>
            {err &&  <Alert severity="error">No Such Place Found</Alert>}
        </div>
    )
}