function generarTablas(){
    let numero = parseInt(document.getElementById("txtNumero").value) || 3;
    let contenedor = document.getElementById("contenedor");
    let contenido = "";
  for (let i = 1; i <= 12; i++) {
    contenido += '<div class="fila">' + numero + ' * ' + i + ' = ' + (numero * i) + '</div>';
  }
    contenedor.innerHTML =contenido ;
}