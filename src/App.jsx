import { useState } from 'react';
import Figure from "./components/Figure";
import ColorSelector from "./components/ColorSelector"
import './App.css';

export default function App() {
  const initialColors = {
    tail: "#ffffff",
    belly: "#ffffff",
    "hind-leg": "#ffffff",
    body: "#ffffff",
    chest: "#ffffff",
    "right-ear": "#ffffff",
    "left-ear": "#ffffff",
    forehead: "#ffffff",
    "right-pupil": "#ffffff",
    "left-pupil": "#ffffff",
    "right-face": "#ffffff",
    "left-face": "#ffffff",
    "left-eye": "#ffffff",
    "right-eye": "#ffffff",
    head: "#ffffff",
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