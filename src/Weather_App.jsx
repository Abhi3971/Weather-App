import Weather_info from "./Weather_info"
import Search_box from "./Search_box"
import { useState } from "react"

export default function () {
    let [Weatherinfo ,setWeatherinfo] = useState({
        city: "Delhi",
        felllike: 37,
        humidity: 62,
        maxtemp: 29,
        mintemp: 28,
        temp: 25,
        wind: 23,
        wheater: "haze",
    })

    let update = (newinfo) =>{
        setWeatherinfo(newinfo)
    }
    return (
        <div>
            <h1 style={{textAlign : "center"}}>Weather App</h1> <br />
            <Search_box update={update}/>
            <Weather_info info={Weatherinfo}/>
        </div>
    )
}