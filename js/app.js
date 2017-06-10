var myGame = new SimonGame();
console.log(myGame);

$(document).ready(function (){
  myGame.startGame();

});

$(document).ready(function (){
  $('button').click(function(){
  var colorJustClicked =  $(this).prop('id'); // return ths id of whatever was just clicked
  var currentSequenceColor =  myGame.sequence[myGame.userClickCount];
  if (currentSequenceColor === colorJustClicked){
    // sequence is correct so far
    myGame.userClickCount += 1;

    if(myGame.userClickCount >= myGame.sequence.length){
      $('body').addClass('sequence-entered');
      alert('Congratulations.....you know how to click buttons. Real impressive.');
      setTimeout(function (){
        $('body').removeClass('sequence-entered');
        myGame.nextRound();

      }, 2125);

      // go to next round code
    }
  }
  else {
    $('body').addClass('game-over');
  alert( 'GAME OVER, MAN!!!!! GAME OVER!!!!!!!!!');
  setTimeout(function(){
    $('body').removeClass('game-over');

    myGame.gameOver();

  }, 3000);

  }
  });

});
