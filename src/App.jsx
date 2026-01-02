import { useState } from 'react';
import Figure from "./components/Figure";
import ColorSelector from "./components/ColorSelector"

export default function App() {
  const initialColors = {
    Tail: "#ffffff",
    Belly: "#ffffff",
    "Hind-leg": "#ffffff",
    Body: "#ffffff",
    Chest: "#ffffff",
    "Right-ear": "#ffffff",
    "Left-ear": "#ffffff",
    Forehead: "#ffffff",
    "Right-pupil": "#ffffff",
    "Left-pupil": "#ffffff",
    "Right-face": "#ffffff",
    "Left-face": "#ffffff",
    "Left-eye": "#ffffff",
    "Right-eye": "#ffffff",
    Head: "#ffffff",
  };

  const[colors, setColors] = useState(initialColors);
  const [selectedPart, setSelectedPart] = useState("Tail");

  return(
    <div className='app'>
    <h1>Color the fox!</h1>
    <ColorSelector
    selectedPart={selectedPart}
    setSelectedPart={setSelectedPart}
    colors={colors}
    setColors={setColors}/>
    
    <Figure colors={colors} setSelectedPart={setSelectedPart}/>
    </div>
  );
}