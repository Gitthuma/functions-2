let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = 50;
let y = 60;
let width = 100;
let height = 75;
let color = 'blue';

// Add your code here

/*Create a button with the wording 'Draw Rectangle' and append it inside <section>*/

const btn = document.createElement('button');
btn.textContent = 'Draw Rectangle';

/*Create a function that draws a rectangle and gives it color*/

function draw() {

    ctx.fillStyle = color; //Gives color to Rectangle
    ctx.fillRect(x, y, width, height); //Draws Rectangle

}


// Don't edit the code below here!

const section = document.querySelector('section');
section.appendChild(btn);

/*Create an event listener to call the draw() function when button is clicked*/

btn.addEventListener('click', draw);