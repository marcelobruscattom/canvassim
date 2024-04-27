canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e){
 color = document.getElementById("color").value;
 mouseX = e.clientX - canvas.offsetLeft;
 mouseY = e.clientY - canvas.offsetTop;
 circle(mouseX, mouseY);
}