alert("luna me quiere")
var d = document.getElementById("dibujito");
if (d.getContext)
{
  var lienzo = d.getContext("2d");
  lienzo.shadowOffsetX = 20;
  lienzo.shadowOffsetY = 6;
  lienzo.shadowBlur = 3;
  lienzo.shadowColor = "purple";
  lienzo.strokeStyle = "red"
  lienzo.strokeRect(25, 25, 250, 200);
  lienzo.strokeStyle = "darkblue"
  lienzo.shadowColor = "blue";
}
console.log(lienzo)
lienzo.beginPath();
lienzo.moveTo(100,100);
lienzo.lineTo(200,100);
lienzo.moveTo(200,100);
lienzo.lineTo(200,200);
lienzo.moveTo(100,100);
lienzo.lineTo(100,200);
lienzo.moveTo(200,200);
lienzo.lineTo(100,200);
lienzo.stroke();
lienzo.closePath();

function dibujarLinea(shadow_color, color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.shadowColor = shadow_color;
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath()
}
dibujarLinea("red", "green", 400, 100, 500, 100);
dibujarLinea("orange", "red", 400, 200, 500, 200);
dibujarLinea("purple", "orange", 400, 100, 400, 200);
dibujarLinea("blue", "darkblue", 500, 100, 500, 200);