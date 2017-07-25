$(function(){
  $('#style_editor').submit(function(event){
    event.preventDefault();
    selector = $('#selector').val();
    property = $('#property').val();
    value = $('#value').val();
    $(selector).css(property,value);
  });
});