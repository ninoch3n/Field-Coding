function createButton(buttontext, buttonlocation, id){
    var where = document.getElementById(buttonlocation);
    var text = buttontext;

    var button = document.createElement("button");
    button.innerHTML = text;
    where.appendChild(button);
    button.classList.add("button");
    button.setAttribute("id", id)
    
    

}

function changeButton(id){
    document.getElementById(id).style.backgroundColor = "red";
}

for(let i = 0; i < 2000; i++){
    createButton(" ", "body", i + 1);
}

for(let i = 0; i < 2000; i++){
    let btn = document.getElementById(i + 1);
    btn.setAttribute("onclick", `changeButton(${i+1})`);
}