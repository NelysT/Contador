import React, {useState } from "react";


const Contador = () => {

const [seconds, setSeconds] = useState(0);

const iniciarContador = () => {
    const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);

}   

const stopContador = () => {
    clearInterval()
}

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
            <button onClick={iniciarContador}>Iniciar</button>
            <button onClick={stopContador}>Stop</button>
        </div>
        
    </div>
   
    )
}
export default Contador;