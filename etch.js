const butt = document.querySelector("button");
let gridSize = 16;

butt.addEventListener("click", () =>{
        let gridSize = prompt("Please enter new grid size between 1 and 100");
        if(gridSize < 100 && gridSize > 0){
            const elementsToRemove= document.querySelectorAll('.grid');
            elementsToRemove.forEach(element => {
                element.remove();
            });
            make_grid(gridSize);
        }else{ //could clean up this line by adding an elif so it doesnt prompt every time
            gridSize = alert("Too large, Please enter new grid size between 1-100")
        }
});

function make_grid(gSize){
    const cont = document.querySelector("div");

    for(let x=0; x < gSize; x++){
        newDiv = document.createElement("div");
        cont.appendChild(newDiv);
        
        for(let y=0; y < gSize; y++){
            vertDiv = document.createElement("div");
            vertDiv.className = "grid";
            let temp = vertDiv; //temp allows each grid to retain the attribute instead of just the last made one
            temp.addEventListener('mouseenter', () => {
                temp.setAttribute("style", "background-color: black;");
            });
            newDiv.appendChild(vertDiv);
        }
    }
}

    //var grids = document.getElementsByClassName("grid");

make_grid(gridSize);

