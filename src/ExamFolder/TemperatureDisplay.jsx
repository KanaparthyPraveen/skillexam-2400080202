import { useState } from "react";

export default function TemperatureDisplay(){
    const[temperature ,setTemperature] = useState(0);

    let message = "";
    if (temperature<0){
        message = "freeze";

    }
    else if (temperature>=0 && temperature<32){
        message = "cold";
    }
    else if (temperature>=32 && temperature<72){
        message = "warm";

    }
    else {
        message = "hot";
    }
    return (
        <div className="temperature">
            <h1 className="text">Temperature: {temperature} F</h1>
            <p className="paragraph">{message}</p>
            <button className="button" onClick={() => setTemperature(temperature - 10)}>- Decrease</button>
            <button className="button" onClick={() => setTemperature(temperature + 10)}>+ Increase</button>
        </div>
    )
}