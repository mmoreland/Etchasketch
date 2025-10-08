const cont = document.querySelector("div");

for(let x=0; x < 16; x++){
    newDiv = document.createElement("div");
    //newDiv.className = "grid";
    //newContent = document.createTextNode(x + 1);

    //newDiv.appendChild(newContent);
    cont.appendChild(newDiv);
    
    for(let y=0; y < 16; y++){
        vertDiv = document.createElement("div");
        vertDiv.className = "grid";
        vertContent = document.createTextNode(y + 1);

        vertDiv.appendChild(vertContent);
        newDiv.appendChild(vertDiv);
    }
}

var grids = getElementsByClassName("grid");
        
