import React, {useRef, useState } from "react";


const Contador = () => {

const [seconds, setSeconds] = useState(0);
const intervalRef = useRef(null);

  const iniciarContador = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
  };
  const stopContador = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reiniciarContador = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setSeconds(0); // Reinicia el contador a 0
    }
  };  
const seis = Math.floor((seconds / 100000) % 10);
const cinco = Math.floor((seconds / 10000) % 10);
const cuatro = Math.floor((seconds / 1000) % 10);
const tres = Math.floor((seconds / 100) % 10);
const dos = Math.floor((seconds / 10) % 10);
const uno = seconds % 10;



        
return (
    <div class="cuadrado container mt-5">
        <div class="row">
            <div class="col">
                <img src="https://ih1.redbubble.net/image.726903074.2890/clkf,white,white,600x600-bg,f8f8f8.u1.jpg" class="img-fluid p-2"/>
            </div>
            <div class="col">{seis}</div>
            <div class="col">{cinco}</div>
            <div class="col">{cuatro}</div>
            <div class="col">{tres}</div>
            <div class="col">{dos}</div>
            <div class="col">{uno}</div>
        </div>
        <div className="container">
            <div className="d-flex justify-content-between mt-3 ">
                <button className="btn btn-info col-4 me-1" onClick={iniciarContador}>Iniciar</button>
                <button className="btn btn-info col-4 me-1" onClick={stopContador}>Stop</button>
                <button className="btn btn-info col-4 me-1" onClick={reiniciarContador}>Reiniciar</button>
            </div>
            
        </div>
        
    </div>
   
    )
}
export default Contador;