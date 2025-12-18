

export default function ColorSelector({ selectedPart, setSelectedPart, colors, setColors}){
    const colorOptions = ["#533308ff", "#f48d18ff", "#7f6f5cff", "#4f4a5efb"];

return(
    <div className="color-selector">
        <p>Velg del å fargelegge: {selectedPart}</p>
        <select
        value={selectedPart}
        onChange={(e)=> setSelectedPart(e.target.value)}>

        {Object.keys(colors).map ((part) => (
            <option key={part} value={part}>
            {part}
            </option>
        ))}

</select>

<div style={{display: "flex", gap: "1rem", marginTop: "1rem"}}>
    {colorOptions.map((c)=>(
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