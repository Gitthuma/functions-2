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

// Don't edit the code below here!

const section = document.querySelector('section');
section.appendChild(btn);