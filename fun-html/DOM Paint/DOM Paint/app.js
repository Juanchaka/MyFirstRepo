let canvas = document.querySelector('#canvas');
let inpColor = document.querySelector('#inp-c');
let button = document.querySelector('button');
let canvasState = true;
let color = '#FF0000';

function createCanvas () {
    for(i=0; i <=1080; i++){
        let div = document.createElement("div");
        canvas.appendChild(div)
    }
}
createCanvas();

canvas.addEventListener('mouseover', (event) => {
    if (event.target !== canvas && canvasState) {
        event.target.style.backgroundColor = color;
    }
});

canvas.addEventListener('click', () => {
    canvasState = !canvasState;
});

inpColor.addEventListener('input', (event) => {
    color = event.target.value;
});

button.addEventListener('click', () => {
    canvas.innerHTML = '';
    createCanvas();
});

