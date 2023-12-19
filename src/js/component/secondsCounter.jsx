import React, { useEffect, useState } from "react";

let seconds = 0;

function SecondsCounter () {
    const [secondOnes, setSecondOnes] = useState(0);
    const [secondTens, setSecondTens] = useState(0);
    const [secondHundreds, setSecondHundreds] = useState(0);
    const [secondOneThousands, setSecondOneThousands] = useState(0);
    const [secondTenThousands, setSecondTenThousands] = useState(0);
    const [secondHundredThousands, setSecondHundredThousands] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setSecondOnes(separateByOrderOfMagnitude(seconds)[0] ? separateByOrderOfMagnitude(seconds)[0] : 0);
            setSecondTens(separateByOrderOfMagnitude(seconds)[1] ? separateByOrderOfMagnitude(seconds)[1] : 0);
            setSecondHundreds(separateByOrderOfMagnitude(seconds)[2] ? separateByOrderOfMagnitude(seconds)[2] : 0);
            setSecondOneThousands(separateByOrderOfMagnitude(seconds)[3] ? separateByOrderOfMagnitude(seconds)[3] : 0);
            setSecondTenThousands(separateByOrderOfMagnitude(seconds)[4] ? separateByOrderOfMagnitude(seconds)[4] : 0);
            setSecondHundredThousands(separateByOrderOfMagnitude(seconds)[5] ? separateByOrderOfMagnitude(seconds)[5] : 0);
            seconds = seconds + 1;
        }, 1000);
      }, []);

    return(  
        <div className="container d-flex bg-black justify-content-center">
            <div className="clockImage m-3 bg-dark  text-white rounded"><i className="fa-solid fa-clock"></i></div>
            <div className="numberDisplay m-3 bg-dark text-white text-center display-1 rounded"><b>{secondHundredThousands.toString()}</b></div>
            <div className="numberDisplay m-3 bg-dark text-white text-center display-1 rounded"><b>{secondTenThousands.toString()}</b></div>
            <div className="numberDisplay m-3 bg-dark text-white text-center display-1 rounded"><b>{secondOneThousands.toString()}</b></div>
            <div className="numberDisplay m-3 bg-dark text-white text-center display-1 rounded"><b>{secondHundreds.toString()}</b></div>
            <div className="numberDisplay m-3 bg-dark text-white text-center display-1 rounded"><b>{secondTens.toString()}</b></div>
            <div className="numberDisplay m-3 bg-dark text-white text-center display-1 rounded"><b>{secondOnes.toString()}</b></div>
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

