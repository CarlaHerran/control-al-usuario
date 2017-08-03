// Define el código que se ejecuta al iniciar la página.
$(function(){
	// Se crea un listener para style editor o apra cuando style editor es enviado 
  $('#style_editor').submit(function(event){
  	// Detenemos el funcionamiento que iba a correr el formulario 
    event.preventDefault();
    // Leemos cada uno de los tres inputs
    selector = $('#selector').val();
    property = $('#property').val();
    value = $('#value').val();
    // Usamos el método css para cambiar el documento, en base a los datos que nos dieron antes. 
    $(selector).css(property,value);
  });
});