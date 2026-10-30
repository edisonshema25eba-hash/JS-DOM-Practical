// Selecting elements to use while you are going to make the event 
//Changing the font size for the first click
//Changing the color of the text for the second click
const text = document.querySelector("#text");
const button = document.querySelector("#changeFontSize");

// Track the number of clicks
let clickCount = 0;

button.addEventListener("click", function() {
    clickCount++;

    if (clickCount === 1) {
        text.style.fontSize = "50px";
    } else if (clickCount === 2) {
        text.style.color = "cyan";
    } else {
        text.style.color='';
        text.style.fontSize='';
        clickCount='';
    }
});
