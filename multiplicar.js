function generarTablas() {
  let numero = parseInt(document.getElementById("txtNumero").value) || 3;

  // Validar rango
  if (numero < 1 || numero > 12) {
    let ayuda = document.getElementById("mensajeAyuda");
    ayuda.textContent = "⚠️ El número debe estar entre 1 y 12. Inténtalo de nuevo.";
    return;
  }

  let contenedor = document.getElementById("contenedor");
  let contenido = "";

  for (let i = 1; i <= 12; i++) {
    contenido += '<div class="fila">' + numero + ' * ' + i + ' = ' + (numero * i) + '</div>';
  }

  contenedor.innerHTML = contenido;

  // Mensaje de éxito
  let ayuda = document.getElementById("mensajeAyuda");
  ayuda.textContent = "✅ Aquí tienes la tabla del " + numero + ".";
}
