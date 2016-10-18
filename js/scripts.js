$('img.cat').click(function(){
  $('ul.cat').append('<li>Bang!!!</li>');
});

$('img.dog').click(function(){
  $('ul.dog').append('<li>Bang!!!</li>');
});

$('#secret-corgi').one('click', function(){
  $(this).append('<img id="corgi" src="img/secret-corgi.jpg">');
});
