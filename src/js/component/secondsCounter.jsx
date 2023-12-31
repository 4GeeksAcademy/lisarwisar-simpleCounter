import React, { useEffect, useState } from "react";

let seconds = 0;

function SecondsCounter () {
    const [timePassed, setTimePassed] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTimePassed(separateByOrderOfMagnitude(seconds));
            seconds = seconds + 1;
        }, 1000);
      }, []);

    return(  
        <div className="container d-flex bg-black justify-content-center">
            <div className="clockImage m-3 bg-dark  text-white rounded justify-content-center d-flex p-2"><i className="fas fa-clock fa-5x"></i></div>
            <div className="numberDisplay m-3 bg-dark text-white text-center display-1 rounded"><b>{timePassed[5] ? timePassed[5] : 0}</b></div>
            <div className="numberDisplay m-3 bg-dark text-white text-center display-1 rounded"><b>{timePassed[4] ? timePassed[4] : 0}</b></div>
            <div className="numberDisplay m-3 bg-dark text-white text-center display-1 rounded"><b>{timePassed[3] ? timePassed[3] : 0}</b></div>
            <div className="numberDisplay m-3 bg-dark text-white text-center display-1 rounded"><b>{timePassed[2] ? timePassed[2] : 0}</b></div>
            <div className="numberDisplay m-3 bg-dark text-white text-center display-1 rounded"><b>{timePassed[1] ? timePassed[1] : 0}</b></div>
            <div className="numberDisplay m-3 bg-dark text-white text-center display-1 rounded"><b>{timePassed[0] ? timePassed[0] : 0}</b></div>
        </div>
    );
}

export default SecondsCounter;

function separateByOrderOfMagnitude (secondsPassed){
    let currentTimeArray = [];
    currentTimeArray.unshift(secondsPassed%10);
    let nextOrderOfMagnitude = (secondsPassed - secondsPassed%10)/10;
    if (nextOrderOfMagnitude != 0){
        secondsPassed = nextOrderOfMagnitude;
        let partialArray = separateByOrderOfMagnitude(secondsPassed);
        for (let index in partialArray){
            currentTimeArray.push(partialArray[index]);
        }
        return currentTimeArray;
    }
    else{
        return currentTimeArray;
    }
}

