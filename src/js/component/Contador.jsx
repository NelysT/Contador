import React, { useEffect, useState } from "react";


const Contador = () => {

const [seconds1, setSeconds1] = useState(0);
const [seconds2, setSeconds2] = useState(0);
const [seconds3, setSeconds3] = useState(0);
const [seconds4, setSeconds4] = useState(0);
const [seconds5, setSeconds5] = useState(0);
const [seconds6, setSeconds6] = useState(0);
    
var contador;
useEffect(() => {

contador = setInterval(() => {
    setSeconds1(seconds1+1);
    if (seconds1===9){
        setSeconds2(seconds2+1);
        setSeconds1(0);}
    else if (seconds2===9){
        setSeconds3(seconds3+1);
        setSeconds2(0);
    }
    else if (seconds3===9){
        setSeconds4(seconds4+1);
        setSeconds3(0);
    }
    else if (seconds4===9){
        setSeconds5(seconds5+1);
        setSeconds4(0);
    }
    else if (seconds5===9){
        setSeconds6(seconds6+1);
        setSeconds5(0);
    }
    
    },1000)
return ()=> clearInterval(contador)
});
      
return (
    <div class="cuadrado container mt-5">
        <div class="row">
            <div class="col">
                <img src="https://ih1.redbubble.net/image.726903074.2890/clkf,white,white,600x600-bg,f8f8f8.u1.jpg" class="img-fluid p-2"/>
            </div>
            <div class="col">{seconds6}</div>
            <div class="col">{seconds5}</div>
            <div class="col">{seconds4}</div>
            <div class="col">{seconds3}</div>
            <div class="col">{seconds2}</div>
            <div class="col">{seconds1}</div>
        </div>
    </div>
   
    )
}

export default Contador;