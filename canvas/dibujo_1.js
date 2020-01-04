const texto = document.getElementById("texto_lineas");
const boton = document.getElementById("botoncito");
const colorcito_1 = document.getElementById("colorcito1");
const colorcito_2 = document.getElementById("colorcito2");
const borrar_g = document.getElementById("borrar");
const forma_1 = document.getElementById("circulo");
const forma_2 = document.getElementById("cuadrado");
forma_1.checked = true;
forma_2.checked = false;

boton.addEventListener("click", dibujarPorClick);
borrar_g.addEventListener("click", borrarLienzo);
forma_1.addEventListener("click", dibujarCirculo);
forma_2.addEventListener("click", dibujarCuadrado);


var g = document.getElementById("dibujo1");
var ancho = g.width;
var ctx = g.getContext("2d");
var lineas = 50;
var l = 0;
var yi, xf, xf1;
var color = "#FAF"
var color1= "lightgreen"
while(l < lineas) 
{ 
  yi = 10 * l;
  xf = 10 + (10 * l);
  xf1= 500 - (10+ (10 * l));
  dibujarLinea(color, 0, yi, xf, 500);
  dibujarLinea(color, 500, yi, xf, 0);
  dibujarLinea(color1, 500, yi, xf1, 500);
  dibujarLinea(color1, 0, yi, xf1, 0);
  l = l + 1;
}
//dibujarLinea(color, 1,1,1,499);
//dibujarLinea(color, 1,499,499,499);
//dibujarLinea(color1,1,1,499,1);
//dibujarLinea(color1,499,1,499,499);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
 {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x_inicial,y_inicial);
  ctx.lineTo(x_final,y_final);
  ctx.stroke();
  ctx.closePath();
 }
function dibujarPorClick()
 {
  var xx = parseInt(texto.value);
  var l = 0;
  var yi, xf; xf1
  var espacio = ancho / xx;
  var colorcito1 = colorcito_1.value;
  var colorcito2 = colorcito_2.value;
  for (l = 0; l < xx; l++)
   {
     yi = espacio * l;
     xf = espacio * (l + 1);
     xf1 = 500 - (espacio + (espacio * l));
     dibujarLinea(colorcito1, 0, yi, xf, 500);
     dibujarLinea(colorcito1, 500, yi, xf, 0);
     dibujarLinea(colorcito2, 500, yi, xf1, 500);
     dibujarLinea(colorcito2, 0, yi, xf1, 0);
   }
  
}
function dibujarCirculo() {
  ctx.clearRect(180, 180, 130, 130)
  ctx.beginPath();
  ctx.arc(250,240,70,0,2*Math.PI);
  ctx.strokeStyle = "#9c9c9c";
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function dibujarCuadrado() {
  ctx.clearRect(175,150, 152, 162)
  ctx.beginPath();
  ctx.fillRect(180, 180, 130, 130);
  ctx.strokeStyle = "#9c9c9c";
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function borrarLienzo() {
  ctx.clearRect(0,0,g.width,g.height)
 }


 ctx.beginPath();
 ctx.arc(250,240,70,0,2*Math.PI);
 ctx.strokeStyle = "#9c9c9c";
 ctx.fillStyle = "black";
 ctx.fill();
 ctx.stroke();
 ctx.closePath();
