const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;
// ctx.moveTo(0, 0);


/* https://flatuicolors.com/palette/tr */
const colors = [
    "#ff3838",
    "#cd84f1",
    "#ffcccc",
    "#ffaf40",
    "#fffa65",
    "#c56cf0",
    "#ffb8b8",
    "#ff3838",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    "#7d5fff",
    "#4b4b4b",
    "#3ae374",
    "#67e6dc",
    "#17c0eb",
    "#7158e2",
    "#3d3d3d"
]

function onclick(event) {
    // console.log(event)
    ctx.beginPath();
    // ctx.moveTo(0, 0);
    ctx.moveTo(400, 400);
    // ctx.moveTo(800, 800);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousemove", onclick);