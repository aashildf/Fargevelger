import { useState } from 'react';
import Figure from "./components/Figure";
import ColorSelector from "./components/ColorSelector"
import './App.css';

export default function App() {
  const initialColors ={
    tail: "#ffcc00",
    belly: "#ffcc00",
    "hind-leg": "#ffcc00",
    body: "#ffcc00",
    chest: "#ffcc00",
    "right-ear": "#ffcc00",
    "left-ear": "#ffcc00",
    forehead: "#ffcc00",
    "right-eyeball": "#ffffff",
    "left-eyeball": "#ffffff",
    "right-eyesocket": "#ffcc00",
    "left-eyesocket": "#ffcc00",
    "right-eye": "#000000",
    "left-eye": "#000000",
    head: "#ffcc00",
  };

  const[colors, setColors] = useState(initialColors);
  const [selectedPart, setSelectedPart] = useState("head");

  return(
    <div className='app'>
    <h1>Fargelegg Reven!</h1>
    <ColorSelector
    selectedPart={selectedPart}
    setSelectedPart={setSelectedPart}
    colors={colors}
    setColors={setColors}/>
    
    <Figure colors={colors} setColors={setColors}/>
    </div>
  );
}