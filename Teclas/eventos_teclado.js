const teclas = {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento) {
  console.log(evento.keyCode);
    switch(evento.keyCode) {
      case teclas.UP:
      console.log("arriba")
      break;
      case teclas.DOWN:
      console.log("abajo")
      break;
      case teclas.LEFT:
      console.log("izquierda")
      break;
      case teclas.RIGHT:
      console.log("derecha")
      break;
      default:
      console.log("otra tecla")
      break;
    }
}
// En lugar de switch usar varios condicionales if
// 
//   if(evento.keyCode == teclas.DOWN){
//   console.log("vamos pa'abajo")
//   }