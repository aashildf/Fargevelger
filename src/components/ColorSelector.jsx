

export default function ColorSelector({ selectedPart, setSelectedPart, colors, setColors}){
    const colorOptions = [
      "#533308ff",
      "#000000",
      "#ffffff",
      "#f6bc7aff",
      "#7f6f5cff",
      "#4f4a5efb",
      "#296290fb",
      "#23513eff",
      "#5e7475ff",
      "#c9b531ff",
      "#8b4513",
      "#b33d3dff",
    ];

return (
  <div className="color-selector">
    <p className="part">
      Velg del å fargelegge:{" "}
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

    <div
      style={{
        display: "flex",
        gap: "1rem",
        marginTop: "2rem",
        marginBottom: "4rem",
      }}
    >
      {colorOptions.map((c) => (
        <button
          key={c}
          style={{ backgroundColor: c, width: "50px", height: "50px" }}
          onClick={() => setColors({ ...colors, [selectedPart]: c })}
        ></button>
      ))}
    </div>
  </div>
);

}