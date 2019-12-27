var g = document.getElementById("dibujo1");
var ctx = g.getContext("2d");
var lineas = 50;
var l = 0;
var yi, xf, xf1;
var color = "#FAF"
var color1= "lightgreen"
while(l < lineas) { 
  yi = 10 * l;
  xf = 10 + (10 * l);
  xf1= 500 - (10+ (10 * l));
  dibujarLinea(color, 0, yi, xf, 500);
  dibujarLinea(color, 500, yi, xf, 0);
  dibujarLinea(color1, 500, yi, xf1, 500);
  dibujarLinea(color1, 0, yi, xf1, 0);
  l = l + 1;
}
dibujarLinea(color, 1,1,1,499);
dibujarLinea(color, 1,500,500,500);
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x_inicial,y_inicial);
  ctx.lineTo(x_final,y_final);
  ctx.stroke();
  ctx.closePath();
}
ctx.beginPath();
ctx.arc(250,240,74,0,2*Math.PI);
ctx.strokeStyle = "#9c9c9c";
ctx.fillStyle = "#572364";
ctx.fill();
ctx.stroke();
ctx.closePath();


