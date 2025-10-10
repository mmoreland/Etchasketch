const cont = document.querySelector("div");

for(let x=0; x < 16; x++){
    newDiv = document.createElement("div");
    cont.appendChild(newDiv);
    
    for(let y=0; y < 16; y++){
        vertDiv = document.createElement("div");
        vertDiv.className = "grid";
        vertContent = document.createTextNode(y + 1);
        let temp = vertDiv;
        temp.addEventListener('mouseenter', () => {
            temp.setAttribute("style", "background-color: black;");
        });
        newDiv.appendChild(vertDiv);
    }
}

var grids = document.getElementsByClassName("grid");

/*for (var i = 0; i < grids.length; i++) {
    var myTurn = grids[i];
    grids[i].addEventListener('mouseenter', () => {
        grids[i].setAttribute("style", "background-color: #ccc;");
    });    
}
    */
        
