let grid = 10; 
let button = document.querySelector("#button");
let container = document.querySelector("#container");
const body = document.querySelector("body");


button.addEventListener("click", () => {
    grid = 0;
    const divsRemove = document.querySelectorAll(".divsY");
    divsRemove.forEach(element => {
        container.removeChild(element);
    });
    let input = document.querySelector("#input")
    grid = input.value;
    cuadricula();
})


function cuadricula (){
        for(let i = 0 ; i < (parseInt(grid) * parseInt(grid)); i++){
            let divsY = document.createElement("div");
            divsY.classList.add("divsY");
            divsY.setAttribute("id", "nose");
            container.appendChild(divsY);
        };
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat (${grid}, 1fr)`;
};

cuadricula();

function getColorNumber(){

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = Math.random() * 1;
    const color = `rgba(${r}, ${g}, ${b}, ${a})`;
    return color;
    
}

const divsY = document.querySelectorAll("div");
divsY.forEach((divY) => {
    divY.addEventListener ("mouseover", function(e){
        e.target.style.background = getColorNumber();
    });
});