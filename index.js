$(document).ready(function() {
   var imagenes = $('#carrusel img');
   var indiceActual = 0;
   var intervalo = setInterval(cambiarImagen, 3000);

   function cambiarImagen() {
      imagenes.eq(indiceActual).removeClass('active');
      indiceActual = (indiceActual + 1) % imagenes.length;
      imagenes.eq(indiceActual).addClass('active');
   }
});

var audio = document.getElementById("audio");
  audio.addEventListener("canplaythrough", function() {
    audio.play();
  });
