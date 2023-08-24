document.addEventListener("DOMContentLoaded", function() {
    // Obtén las referencias a los elementos del DOM
    let contenedor1 = document.querySelector(".contenedor1");
    let contenedor2 = document.querySelector(".contenedor2");
    let contenedor3 = document.querySelector(".contenedor3");
    let contenedor4 = document.querySelector(".contenedor4");
    let contenedor5 = document.querySelector(".contenedor5");
    let otherScene = document.getElementById("otherScene");
    let contenedorx = document.querySelector(".contenedorx");
    // Muestra la escena de carga por defecto
    //block lo que se muestra o por defecto lo que se muestra osea no es necesario
    contenedor1.style.display = "block";
    contenedor2.style.display = "block";
    contenedor3.style.display = "block";
    contenedor4.style.display = "block";
    contenedor5.style.display = "block";
    otherScene.style.display = "none";
  
    // Espera 4 segundos antes de cambiar de escena
    setTimeout(function() {
      // Oculta la escena de carga y muestra la otra escena
      //none lo que no quieres que se muestre
      otherScene.style.display = "block";    
      contenedor1.style.display = "none";
      contenedor2.style.display = "none";
      contenedor3.style.display = "none";
    contenedor4.style.display = "none";
    contenedor5.style.display = "none";
    contenedorx.style.display = "none";
    
    }, 10000); // Cambia el valor de 4000 a la cantidad de tiempo en milisegundos que deseas esperar antes de cambiar de escena
  });
//Muestra la fecha en formato lunes, 17 de jul de 2023
function Fecha() {
  const fechaUTC = new Date();
  const timeZone = "America/Santiago";
  const date = new Date(fechaUTC.toLocaleString("en-US", { timeZone }));
  const formatFullDate = date.toLocaleDateString("es-CL", {
    weekday: "long", // narrow, short
    year: "numeric", // 2-digit
    month: "short", // numeric, 2-digit, narrow, long
    day: "numeric" // 2-digit
    //obtener la fecha que me interesa ingresa en formato de bbdd
});

  // Obtener la hora actual en la zona horaria de Chile
//document.getElementById("fecha").innerHTML = formatFullDate;
// Establecer el valor de la fecha en el input hidden del formulario
//Obtiene la fecha pero en el formato mas simple: 17-07-2023
}

function obtenerFecha() {
  const fechaUTC = new Date();
  const timeZone = "America/Santiago";
  const date = new Date(fechaUTC.toLocaleString("en-US", { timeZone }));
  const dia = date.getDate().toString().padStart(2, "0");
  const mes = (date.getMonth() + 1).toString().padStart(2, "0");
  const anio = date.getFullYear().toString();
  const fecha = `${dia}-${mes}-${anio}`;
  return fecha;
}

document.getElementById("fecha").innerHTML = obtenerFecha();
console.log(obtenerFecha());
//Muestra la hora y luego de la funcion la actualiza cada segundo
function actualizarHora() {
  // Obtener la hora actual en la zona horaria de Chile
  const fechaUTC = new Date();
  const timeZone = "America/Santiago";
  const date = new Date(fechaUTC.toLocaleString("en-US", { timeZone }));
  // Formatear la hora actual en formato hh:mm:ss AM/PM
  const formatFullTime = date.toLocaleTimeString("es-CL", {
    hour12: false,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });
  // Actualizar el contenido del elemento HTML con la hora actual
  document.getElementById("hora").innerHTML = formatFullTime;
  console.log(formatFullTime);
}
// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);

document.addEventListener("DOMContentLoaded", function() {
 let okElements = document.getElementsByClassName("ok");
 let infoElements = document.getElementsByClassName("info");

  // Oculta los elementos "ok" por defecto
  for (let i = 0; i < okElements.length; i++) {
    okElements[i].style.visibility = "hidden";
    
  }

  // Muestra los elementos "ok" uno por uno con un retraso
  var delay = 1000; // Retraso en milisegundos entre cada aparición
  for (let i = 0; i < okElements.length; i++) {
    (function(index) {
      setTimeout(function() {
        okElements[index].style.visibility = "visible";
      }, delay * (index + 1));
    })(i);
  }
});