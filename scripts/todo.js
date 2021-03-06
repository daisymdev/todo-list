let input = document.getElementById("input");
const enter = document.getElementById("enter");
let ul = document.querySelector("ul");
const li = document.getElementById("li");

function createItem() {

    if(!input.value) {
        alert("Nothing entered, please add something");
    } 
    else {

        const li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        input.value = "";
        ul.appendChild(li);

        const closeBtn = document.createElement("button");
        closeBtn.appendChild(document.createTextNode("X"));
        li.appendChild(closeBtn);
    
        function removeItem(){
            li.remove();
        }
    
        closeBtn.addEventListener("click", removeItem);
    }
}

enter.addEventListener('click', createItem);
input.addEventListener('keydown', (e) => {
    if('Enter'=== e.key) {
        createItem();
    }
});
