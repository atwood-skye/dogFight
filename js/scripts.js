var countDog = 0;
var countCat = 0;
var corgi = 0;
var bang = "Bang!";
$('img.cat').click(function(){
  $('ul.cat').append('<li>'+ bang+ '</li>');
  $('#middle').children('h1').remove();
  $('#corgi').remove();
  countCat++;
  bang+="!";
  corgi=0;
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
  $('#corgi').remove();
  countDog++;
  bang+="!";
  corgi=0;
  if(countDog === 5) {
    $('#middle').append('<h1>The dog wins!!!</h1>');
    $('ul.dog').children().remove();
    $('ul.cat').children().remove();
    countDog=0;
    countCat=0;
    bang = "Bang!";
  };
});

$('#secret-corgi').click(function(){
  $('#middle').children('h1').remove();
  if(corgi === 0) {
    $(this).append('<img id="corgi" src="img/secret-corgi.jpg">');
    $('#middle').append('<h1>The corgi wins!!!!!!!!!</h1>');
    corgi++;
  }
  else {
    $('#corgi').remove();
    $('#middle').children('h1').remove();
    corgi = 0;
  }
  $('ul.dog').children().remove();
  $('ul.cat').children().remove();
  countDog=0;
  countCat=0;
  bang = "Bang!";
});
