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


// -----------nullstill fargene----------
const resetColors = () => {
  if(window.confirm("Do you want to erase all colors and start over?")){
    setColors(initialColors);
  }
};

// ------lagre som bilde-funskjon-----
const downloadFox = ()=> {
  const svg = document.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image(); 


// høy oppløsning for nedlasting
canvas.width = 1183;
canvas.height = 663;

const svgBlob = new Blob ([svgData], {type: "image/svg+xml;charset=utf-8" });
const url = URL.createObjectURL(svgBlob);

img.onload = () => {
  // Tegn hvit bakgrunn 
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);
  URL.revokeObjectURL(url);

  const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "my_little_fox.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    img.src = url;
  };


  return (
    <div className="app">
      <h1>The Little Fox's Sketchbook</h1>
      <ColorSelector
        selectedPart={selectedPart}
        setSelectedPart={setSelectedPart}
        colors={colors}
        setColors={setColors}
      />
      <Figure
        colors={colors}
        setSelectedPart={setSelectedPart}
        selectedPart={selectedPart}
      />

      <div className="action-buttons">
        <button className="secondary-button" onClick={resetColors}>
          Start over
        </button>
        <button className="primary-button" onClick={downloadFox}>
          Save picture
        </button>
      </div>

    </div>
  );
}