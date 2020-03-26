import React, { useState } from 'react';
import styles from 'styled-components';

const LaLoz = styles.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .luzApagada {
    background: #000;
    button{
      background-color: lightyellow;
      color: black;
    }
  }
  .luzPrendida {
    background: lightyellow;
     button{
      background-color: black;
      color: lightyellow;
     }
  }
  .nombreDelDiv {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
      button{
        border: none;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }
  }

`;

function App() {
  let [color, setColor] = useState("luzPrendida");
  let [mensaje, setMensaje] = useState("Apagá la luz")

  const handleClick = () => {
    console.log("prendo o hago algo con la loooozz MAMA");
    setColor(color === "luzPrendida" ? "luzApagada" : "luzPrendida")
    setMensaje(mensaje === "Apagá la luz" ? "Prendé la luz" : "Apagá la luz")
    // "CORTASTE TODA LA LOOOZ"
  }

  return (
    <LaLoz>
      <div className={`nombreDelDiv ${color}`}>
      <button onClick={handleClick}>{mensaje}</button>
      </div>
    </LaLoz>
  );
}

export default App;
