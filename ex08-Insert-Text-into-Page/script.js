

const text = document.querySelector("#inputText");
const inputText = document.querySelector("#displayText");
const button = document.querySelector("#addText");
button.addEventListener("click", function(){
    const newText = document.createElement("p");
    inputText.appendChild(newText);
    newText.textContent = text.value;
    if(inputText === " "){
        return;
    }
    text.value = "";
});
