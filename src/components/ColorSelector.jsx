

export default function ColorSelector({ selectedPart, setSelectedPart, colors, setColors}){
    const colorOptions = [
      "#161514ff", // Nesten sortbrun
      "#3D2B1F", // Deep Bark 
      "#593D2E", // Mørk sjokolade 
      "#A67B5B", // Lysere kastanje 
      "#EBC073", // Solnedgang-gul 
      "#F4E4AD", // Buttermilk Yellow
      "#F9F1E6", // Misty Cream
      "#D9C5B2", // Varm beige
      "#D4A5A5", // Gammelrosa 
      "#D8BFD8", // Thistle
      "#D1D5D8", // Silver Birch
      "#A8B9C4", // Cloudy Blue
    ];

    

return (
  <div className="color-selector">
    <p className="part">
      Choose a part to color:{" "}
      <span className="selected-part">{selectedPart}</span>
    </p>
    <select
      className="part-select"
      value={selectedPart}
      onChange={(e) => setSelectedPart(e.target.value)}
    >
      {Object.keys(colors).map((part) => (
        <option key={part} value={part}>
          {part}
        </option>
      ))}
    </select>

    <div className="color-options">
      {colorOptions.map((c) => (
        <button
          key={c}
          className={`color-button ${
            colors[selectedPart] === c ? "active-color" : ""
          }`}
          style={{ backgroundColor: c }}
          onClick={() => setColors({ ...colors, [selectedPart]: c })}
        ></button>
      ))}
    </div>
  </div>
);

}