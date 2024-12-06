const gridContainer = document.getElementById("container");
const resetButton = document.getElementById("reset");

const createGrid = (gridSize) => {
    gridContainer.innerHTML = ""; 

    
    const totalGap = (gridSize - 1) * 2; 
    const blockSize = Math.floor((960 - totalGap) / gridSize); 

    
    const adjustedContainerSize = blockSize * gridSize + totalGap;
    gridContainer.style.width = `${adjustedContainerSize}px`;
    gridContainer.style.height = `${adjustedContainerSize}px`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("gridBlocks");
        div.style.width = `${blockSize}px`;
        div.style.height = `${blockSize}px`;
        gridContainer.appendChild(div);
    }

    applyHoverEffect((event) => {
        event.target.style.backgroundColor = "black";
    });
};




const applyHoverEffect = (hoverFunction) => {
    const gridBlocks = document.querySelectorAll(".gridBlocks");
    gridBlocks.forEach((block) => {
        block.removeEventListener("mouseenter", block.hoverHandler);
        block.hoverHandler = hoverFunction;
        block.addEventListener("mouseenter", block.hoverHandler);
    });
};



resetButton.addEventListener("click", () => {
    const gridBlocks = document.querySelectorAll(".gridBlocks");
    gridBlocks.forEach((block) => {
        block.style.backgroundColor = "whitesmoke";
    });
});

const newGridButton = document.getElementById("newGrid");
newGridButton.addEventListener("click", () => {
    let gridSize = prompt("Enter the number of squares per side (max 100):");

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        createGrid(gridSize);
    }
});


createGrid(16);