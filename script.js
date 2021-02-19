let input = document.getElementById("input");
const enter = document.getElementById("enter");
let ul = document.querySelector("ul");
let li = document.getElementById("li");

function createItem() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    input.value = "";
    ul.appendChild(li);

    const closeBtn = document.createElement("button");
    closeBtn.appendChild(document.createTextNode("X"));
    li.appendChild(closeBtn);
    closeBtn.addEventListener("click", removeItem);

    function removeItem(){
        li.remove();
        console.log("deleting...");
    }
}

enter.addEventListener("click", createItem);
