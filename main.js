const canvas=document.querySelector('#draw');
console.log(canvas);
const ctx=canvas.getContext('2d');
console.log("wyf ",ctx);


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


ctx.strokeStyle="#ff0000";
ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth=40;

let hue=0;
let isDraw=false;

let lastX=0;
let lastY=0;


function draw(e){
    if(!isDraw) return;
    console.log("aajs");
    console.log(e);
    ctx.strokeStyle=`hsl(${hue},100%,50%)`
    ctx.beginPath(lastX,lastY);
    ctx.moveTo(e.offsetX,e.offsetY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX=e.offsetX;
    lastY=e.offsetY;
    hue++;
}

canvas.addEventListener('mousemove',draw)
canvas.addEventListener('mousedown',(e)=>{
isDraw=true;
lastX=e.offsetX;
    lastY=e.offsetY;
})
canvas.addEventListener('mouseup',(e)=>isDraw=false);
canvas.addEventListener('mouseout',()=> isDraw=false);