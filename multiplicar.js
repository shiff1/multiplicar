function generarTablas(){
    let contenedor = document.getElementById("contenedor");
    let contenido = "";
  for (let i = 1; i <= 12; i++) {
    contenido += '<div class="fila">5 * ' + i + ' = ' + (5 * i) + '</div>';
  }
    contenedor.innerHTML =contenido ;
}