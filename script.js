let input = document.getElementById("input");
let enter = document.getElementById("enter");
let ul = document.querySelector("ul");
let li = document.getElementById("li");


function createItem() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}


enter.addEventListener("click", createItem);