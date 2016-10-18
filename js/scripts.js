var countDog = 0;
var countCat = 0;
var bang = "Bang!";
$('img.cat').click(function(){
  $('ul.cat').append('<li>'+ bang+ '</li>');
  $('#middle').children('h1').remove();
  countCat++;
  bang+="!";
  if(countCat === 5) {
    $('#middle').append('<h1>The cat wins!!!</h1>');
    $('ul.cat').children().remove();
    $('ul.dog').children().remove();
    countCat=0;
    countDog=0;
    bang = "Bang!";
  };
});

$('img.dog').click(function(){
  $('ul.dog').append('<li>'+ bang+ '</li>');
  $('#middle').children('h1').remove();
  countDog++;
  bang+="!";
  if(countDog === 5) {
    $('#middle').append('<h1>The dog wins!!!</h1>');
    $('ul.dog').children().remove();
    $('ul.cat').children().remove();
    countDog=0;
    countCat=0;
    bang = "Bang!";
  };
});

$('#secret-corgi').one('click', function(){
  $(this).append('<img id="corgi" src="img/secret-corgi.jpg">');
});
