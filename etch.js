const gridContainer = document.getElementById("container");

for (let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.classList.add("gridBlocks");
    gridContainer.appendChild(div);
}