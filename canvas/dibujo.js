alert("luna me quiere")
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo)
lienzo.beginPath();
lienzo.strokeStyle = "darkred";
lienzo.shadowOnsetX = 0;
lienzo.shadowOffsetX = 300;
lienzo.shadowOnsetY = 0;
lienzo.shadowOffsetY = 300;
lienzo.shadowColor = "rgba(78, 187, 255, 0.5)";
lienzo.moveTo(100,100);
lienzo.lineTo(200,100);
lienzo.stroke();
lienzo.closePath();
