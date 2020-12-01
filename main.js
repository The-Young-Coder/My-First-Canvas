var canvas =document.getElementById("Drawing_Book");
ctx=canvas.getContext("2d");
color = "black";


ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =2;
ctx.arc(200,200,40,0,2*Math.PI);

ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
color = document.getElementById("Color").value;
mousex = e.clientX-canvas.offsetLeft;
mousey = e.clientY-canvas.offsetTop;
Circle(mousex,mousey);
}

function Circle(mousex,mousey){
 ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =2;
ctx.arc(mousex,mousey,40,0,2*Math.PI);
ctx.stroke();
}

function Clear_Area(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}