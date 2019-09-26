function createButton(buttontext, buttonlocation, id){
    var where = document.getElementById(buttonlocation);
    var text = buttontext;

    var button = document.createElement("div");
    button.innerHTML = text;
    where.appendChild(button);
    button.classList.add("button");
    button.setAttribute("id", id)
    
    

}

var gridSize = 25;

function changeButton(id){
    document.getElementById(id).style.backgroundColor = "black";
}

for(let i = 0; i < gridSize*gridSize; i++){
    createButton(" ", "canvas", i + 1);
}

var canvas = document.getElementById("canvas");
canvas.style.width = `${gridSize*32}px`;

for(let i = 0; i < gridSize*gridSize; i++){
    let btn = document.getElementById(i + 1);
    btn.setAttribute("onclick", `changeButton(${i+1})`);
}