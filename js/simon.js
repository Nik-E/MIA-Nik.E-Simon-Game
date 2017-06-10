function SimonGame () {
this.colors = ['red','green','blue','yellow'];
// Our current sequence
this.sequence = [];

// This will keep track of where the user is in the sequence
this.userClickCount = 0;

// This will keep track of what the player's score is
this.round = 1;

}
SimonGame.prototype.startGame = function (){
  console.log('Starting the Game...');
  this.addColor();
  this.showSequence();
};




// Chooses one of the 4 colors at random and adds it to the sequence
SimonGame.prototype.addColor  = function (){
  var randomIndex = Math.floor(Math.random()* 4);

  this.sequence.push(this.colors[randomIndex]);
};
SimonGame.prototype.showSequence = function (){
  var ourSequence = this.sequence; //create a variable becuase when setInerval invokes, it screws with the variable
  var i = 0;
  $('#buttons-container').addClass('blocked');


  var intervalId = setInterval(function (){
    if (i >= ourSequence.length){
      clearInterval(intervalId);
      $('#buttons-container').removeClass('blocked');
      return;
    }

  });
  setInterval(function (){


    // Turns on the light by adding class='lighton'
    $('#' + ourSequence[i]).addClass('lighton');
    //  ex. $('#red').addClass('lighton');

    // after 700ms...
    setTimeout(function (){
      // turns off the light by removing the class
      $('button').removeClass('lighton');
    }, 700);

    i += 1;
  }, 1300);
};


SimonGame.prototype.nextRound = function (){
  this.addColor();
  this.showSequence();
  this.userClickCount = 0;


  $('#counter').html(this.round);
  this.round += 1;
};



SimonGame.prototype.gameOver = function (){
  this.sequence = [];
  this.userClickCount = 1;
  this.round = 1;
  $('#counter').html(0);

  this.startGame();
};
