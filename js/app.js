document.addEventListener('DOMContentLoaded', () => {

  const game = {};
  //===== Game Board ====//
  game.board = document.getElementById('board');
  game.playerTurn = document.getElementById('playerturn');
  game.scoreX = document.getElementById('scoreX');
  game.scoreY = document.getElementById('scoreY');
  game.turn = true;
  game.plane = document.createElement('div');
  // game.match = false;

  game.board.appendChild(game.plane);


  game.boxesArray = [];
  game.v_linesArray = [];
  game.h_linesArray = [];
  // game.boxesStr = ['1','3','5','7','9'];
  game.xyArray = [];
  game.boxesTaken = [];
  game.boxesTakenX = [];
  game.boxesTakenY = [];

  game.inGameScore = () => {
    game.scoreX.innerText = `PLAYER X SCORE : ${game.boxesTakenX.length}`
    game.scoreY.innerText = `PLAYER Y SCORE : ${game.boxesTakenY.length}`
  }

  game.winCheck = () => {
    if (game.boxesTaken.length === 25) {
      if ((game.boxesTakenX.length) >
      (game.boxesTakenY.length)) {
        console.log('playerX wins!');
        alert('playerX wins!')
      }else if ((game.boxesTakenX.length) <
      (game.boxesTakenY.length)) {
        console.log('playerY wins!');
        alert('playerY wins!')
      }
    }
  }

  game.clearArr = ()=>{
    // if (game.boxesTaken.length ++ ) {
    game.xyArray.length = 0;
    // }
  };

  // game.moveAgain = () => {
  //   // if (game.boxesTakenX === "box playerX") {
  //   //   game.turn = true;
  //   //   // game.setClicks();
  //   // }else if (game.boxesTaken[game.boxesTaken.length -1] === "box playerY") {
  //   //   game.turn = false;
  //   //   // game.setClicks();
  //   // }else if (game.boxes) {
  //   //
  //   // }
  //   for (var i = 0; i < game.boxesTakenX.length; i++) {
  //     game.boxesTakenX[i].
  //   }
  // }

  //START OF THE IF OF DOOM
  game.box1 = () => {
    ///ROW = 1 DATA-ROW =1
    ///SQUARE 1
    if (game.boxes[0].getAttribute('data-col') === '1' && game.boxes[0].getAttribute('data-row') === '1') {

      if ((game.h_linesArray[0].attributes[0].value === 'h_line playerY'|| game.h_linesArray[0].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[5].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[5].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[0].attributes[0].value === 'v_line playerY'|| game.v_linesArray[0].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[1].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[1].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[0].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[0].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[0].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[0].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[0].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[0].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[0].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 1
    ///SQUARE 2
    if (game.boxes[1].getAttribute('data-col') === '3' && game.boxes[1].getAttribute('data-row') === '1') {

      if ((game.h_linesArray[1].attributes[0].value === 'h_line playerY'|| game.h_linesArray[1].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[6].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[6].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[1].attributes[0].value === 'v_line playerY'|| game.v_linesArray[1].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[2].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[2].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[1].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[1].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[1].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[1].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[1].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[1].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[1].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2

    }// close if square 2
    ///SQUARE 3
    if (game.boxes[2].getAttribute('data-col') === '5' && game.boxes[2].getAttribute('data-row') === '1') {

      if ((game.h_linesArray[2].attributes[0].value === 'h_line playerY'|| game.h_linesArray[2].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[7].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[7].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[2].attributes[0].value === 'v_line playerY'|| game.v_linesArray[2].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[3].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[3].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[2].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[2].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[2].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[2].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[2].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[2].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[2].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2

    }// close if square 3
    ///SQUARE 4
    if (game.boxes[3].getAttribute('data-col') === '7' && game.boxes[3].getAttribute('data-row') === '1') {

      if ((game.h_linesArray[3].attributes[0].value === 'h_line playerY'|| game.h_linesArray[3].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[8].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[8].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[3].attributes[0].value === 'v_line playerY'|| game.v_linesArray[3].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[4].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[4].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[3].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[3].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[3].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[3].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[3].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[3].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[3].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 4
    ///SQUARE 5
    if (game.boxes[4].getAttribute('data-col') === '9' && game.boxes[4].getAttribute('data-row') === '1') {

      if ((game.h_linesArray[4].attributes[0].value === 'h_line playerY'|| game.h_linesArray[4].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[9].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[9].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[4].attributes[0].value === 'v_line playerY'|| game.v_linesArray[4].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[5].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[5].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[4].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[4].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[4].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[4].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[4].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[4].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[4].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 5
    ///
    ///ROW = 2 DATA-ROW =3
    ///SQUARE 6
    if (game.boxes[5].getAttribute('data-col') === '1' && game.boxes[5].getAttribute('data-row') === '3') {

      if ((game.h_linesArray[5].attributes[0].value === 'h_line playerY'|| game.h_linesArray[5].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[10].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[10].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[6].attributes[0].value === 'v_line playerY'|| game.v_linesArray[6].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[7].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[7].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[5].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[5].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[5].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[5].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[5].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[5].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[5].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 6
    ///SQUARE 7
    if (game.boxes[6].getAttribute('data-col') === '3' && game.boxes[6].getAttribute('data-row') === '3') {

      if ((game.h_linesArray[6].attributes[0].value === 'h_line playerY'|| game.h_linesArray[6].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[11].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[11].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[7].attributes[0].value === 'v_line playerY'|| game.v_linesArray[7].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[8].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[8].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[6].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[6].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[6].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[6].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[6].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[6].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[6].setAttribute('isColored', 'true');
              console.log(game.boxesTaken);

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 7
    ///SQUARE 8
    if (game.boxes[7].getAttribute('data-col') === '5' && game.boxes[7].getAttribute('data-row') === '3') {

      if ((game.h_linesArray[7].attributes[0].value === 'h_line playerY'|| game.h_linesArray[7].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[12].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[12].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[8].attributes[0].value === 'v_line playerY'|| game.v_linesArray[8].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[9].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[9].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[7].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[7].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[7].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[7].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[7].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[7].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[7].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 8
    ///SQUARE 9
    if (game.boxes[8].getAttribute('data-col') === '7' && game.boxes[8].getAttribute('data-row') === '3') {

      if ((game.h_linesArray[8].attributes[0].value === 'h_line playerY'|| game.h_linesArray[8].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[13].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[13].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[9].attributes[0].value === 'v_line playerY'|| game.v_linesArray[9].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[10].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[10].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[8].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[8].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[8].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[8].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[8].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[8].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[8].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 9
    ///SQUARE 10
    if (game.boxes[9].getAttribute('data-col') === '9' && game.boxes[9].getAttribute('data-row') === '3') {

      if ((game.h_linesArray[9].attributes[0].value === 'h_line playerY'|| game.h_linesArray[9].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[14].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[14].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[10].attributes[0].value === 'v_line playerY'|| game.v_linesArray[10].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[11].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[11].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[9].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[9].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[9].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[9].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[9].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[9].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[9].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 10
    ///
    ///ROW = 3 DATA-ROW =5
    ///SQUARE 11
    if (game.boxes[10].getAttribute('data-col') === '1' && game.boxes[10].getAttribute('data-row') === '5') {

      if ((game.h_linesArray[10].attributes[0].value === 'h_line playerY'|| game.h_linesArray[10].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[15].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[15].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[12].attributes[0].value === 'v_line playerY'|| game.v_linesArray[12].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[13].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[13].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[10].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[10].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[10].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[10].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[10].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[10].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[10].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 11
    ///SQUARE 12
    if (game.boxes[11].getAttribute('data-col') === '3' && game.boxes[11].getAttribute('data-row') === '5') {

      if ((game.h_linesArray[11].attributes[0].value === 'h_line playerY'|| game.h_linesArray[11].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[16].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[16].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[13].attributes[0].value === 'v_line playerY'|| game.v_linesArray[13].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[14].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[14].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[11].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[11].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[11].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[11].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[11].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[11].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[11].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 12
    ///SQUARE 13
    if (game.boxes[12].getAttribute('data-col') === '5' && game.boxes[12].getAttribute('data-row') === '5') {

      if ((game.h_linesArray[12].attributes[0].value === 'h_line playerY'|| game.h_linesArray[12].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[17].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[17].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[14].attributes[0].value === 'v_line playerY'|| game.v_linesArray[14].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[15].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[15].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[12].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[12].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[12].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[12].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[12].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[12].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[12].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 13
    ///SQUARE 14
    if (game.boxes[13].getAttribute('data-col') === '7' && game.boxes[13].getAttribute('data-row') === '5') {

      if ((game.h_linesArray[13].attributes[0].value === 'h_line playerY'|| game.h_linesArray[13].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[18].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[18].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[15].attributes[0].value === 'v_line playerY'|| game.v_linesArray[15].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[16].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[16].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[13].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[13].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[13].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[13].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[13].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[13].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[13].setAttribute('isColored', 'true');


            }//close if 5

          }//close if 4

        }//close if 3
      }// close if 2

    }// close if square 14
    ///SQUARE 15
    if (game.boxes[14].getAttribute('data-col') === '9' && game.boxes[14].getAttribute('data-row') === '5') {

      if ((game.h_linesArray[14].attributes[0].value === 'h_line playerY'|| game.h_linesArray[14].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[19].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[19].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[16].attributes[0].value === 'v_line playerY'|| game.v_linesArray[16].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[17].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[17].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[14].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[14].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[14].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[14].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[14].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[14].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[14].setAttribute('isColored', 'true');


            }//close if 5

          }//close if 4
        }//close if 3
      }// close if 2

    }// close if square 15
    ///
    ///ROW = 4 DATA-ROW =7
    ///SQUARE 16
    if (game.boxes[15].getAttribute('data-col') === '1' && game.boxes[15].getAttribute('data-row') === '7') {

      if ((game.h_linesArray[15].attributes[0].value === 'h_line playerY'|| game.h_linesArray[15].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[20].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[20].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[18].attributes[0].value === 'v_line playerY'|| game.v_linesArray[18].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[19].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[19].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[15].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[15].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[15].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[15].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[15].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[15].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[15].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 16
    ///SQUARE 17
    if (game.boxes[16].getAttribute('data-col') === '3' && game.boxes[16].getAttribute('data-row') === '7') {

      if ((game.h_linesArray[16].attributes[0].value === 'h_line playerY'|| game.h_linesArray[16].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[21].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[21].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[19].attributes[0].value === 'v_line playerY'|| game.v_linesArray[19].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[20].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[20].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[16].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[16].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[16].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[16].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[16].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[16].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[16].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 17
    ///SQUARE 18
    if (game.boxes[17].getAttribute('data-col') === '5' && game.boxes[17].getAttribute('data-row') === '7') {

      if ((game.h_linesArray[17].attributes[0].value === 'h_line playerY'|| game.h_linesArray[17].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[22].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[22].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[20].attributes[0].value === 'v_line playerY'|| game.v_linesArray[20].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[21].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[21].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[17].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[17].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[17].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[17].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[17].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[17].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[17].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 18
    ///SQUARE 19
    if (game.boxes[18].getAttribute('data-col') === '7' && game.boxes[18].getAttribute('data-row') === '7') {

      if ((game.h_linesArray[18].attributes[0].value === 'h_line playerY'|| game.h_linesArray[18].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[23].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[23].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[21].attributes[0].value === 'v_line playerY'|| game.v_linesArray[21].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[22].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[22].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[18].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[18].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[18].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[18].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[18].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[18].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[18].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 14
    ///SQUARE 20
    if (game.boxes[19].getAttribute('data-col') === '9' && game.boxes[19].getAttribute('data-row') === '7') {

      if ((game.h_linesArray[19].attributes[0].value === 'h_line playerY'|| game.h_linesArray[19].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[24].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[24].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[22].attributes[0].value === 'v_line playerY'|| game.v_linesArray[22].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[23].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[23].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[19].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[19].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[19].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[19].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[19].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[19].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[19].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 20
    ///
    ///ROW = 5 DATA-ROW =9
    ///SQUARE 21
    if (game.boxes[20].getAttribute('data-col') === '1' && game.boxes[20].getAttribute('data-row') === '9') {

      if ((game.h_linesArray[20].attributes[0].value === 'h_line playerY'|| game.h_linesArray[20].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[25].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[25].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[24].attributes[0].value === 'v_line playerY'|| game.v_linesArray[24].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[25].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[25].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[20].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[20].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[20].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[20].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[20].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[20].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[20].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 16
    ///SQUARE 22
    if (game.boxes[21].getAttribute('data-col') === '3' && game.boxes[21].getAttribute('data-row') === '9') {

      if ((game.h_linesArray[21].attributes[0].value === 'h_line playerY'|| game.h_linesArray[21].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[26].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[26].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[25].attributes[0].value === 'v_line playerY'|| game.v_linesArray[25].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[26].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[26].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[21].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[21].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[21].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[21].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[21].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[21].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[21].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 17
    ///SQUARE 23
    if (game.boxes[22].getAttribute('data-col') === '5' && game.boxes[22].getAttribute('data-row') === '9') {

      if ((game.h_linesArray[22].attributes[0].value === 'h_line playerY'|| game.h_linesArray[22].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[27].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[27].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[26].attributes[0].value === 'v_line playerY'|| game.v_linesArray[26].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[27].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[27].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[22].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[22].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[22].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[22].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[22].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[22].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[22].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 18
    ///SQUARE 24
    if (game.boxes[23].getAttribute('data-col') === '7' && game.boxes[23].getAttribute('data-row') === '9') {

      if ((game.h_linesArray[23].attributes[0].value === 'h_line playerY'|| game.h_linesArray[23].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[28].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[28].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[27].attributes[0].value === 'v_line playerY'|| game.v_linesArray[27].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[28].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[28].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[23].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[23].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[23].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[23].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[23].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[23].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[23].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 14
    ///SQUARE 25
    if (game.boxes[24].getAttribute('data-col') === '9' && game.boxes[24].getAttribute('data-row') === '9') {

      if ((game.h_linesArray[24].attributes[0].value === 'h_line playerY'|| game.h_linesArray[24].attributes[0].value === 'h_line playerX')&&( game.h_linesArray[29].attributes[0].value === 'h_line playerY'||
      game.h_linesArray[29].attributes[0].value === 'h_line playerX')){

        if ((game.v_linesArray[28].attributes[0].value === 'v_line playerY'|| game.v_linesArray[28].attributes[0].value === 'v_line playerX')&&( game.v_linesArray[29].attributes[0].value === 'v_line playerY'||
        game.v_linesArray[29].attributes[0].value === 'v_line playerX')) {

          if (game.boxes[24].getAttribute('isColored') === 'false') {
            if (game.xyArray[game.xyArray.length -1] === "h_line playerY"|| game.xyArray[game.xyArray.length -1] === "v_line playerY") {
              game.boxes[24].setAttribute('class', 'box playerY');
              game.boxesTaken.push(game.boxes[24].attributes[0].value);
              game.boxesTakenY.push(game.boxes[0].attributes[0].value);
              game.boxes[24].setAttribute('isColored', 'true');

            }else if (game.xyArray[game.xyArray.length -1] === "h_line playerX"|| game.xyArray[game.xyArray.length -1] === "v_line playerX") {
              game.boxes[24].setAttribute('class', 'box playerX');
              game.boxesTaken.push(game.boxes[24].attributes[0].value);
              game.boxesTakenX.push(game.boxes[0].attributes[0].value);
              game.boxes[24].setAttribute('isColored', 'true');

            }//close if 5
          }//close if 4
        }//close if 3
      }// close if 2
    }// close if square 25
    ///
  }//close of game.box1
  //END OF THE IF OF DOOM

  // Create 10 rows
  // Even (starting at 0) should be DOT -> H_LINE
  // // DOT -> H_LINE should alternate
  // Odd (starting at 1) should be V_LINE -> BOX
  // // V_LINE -> BOX should alternate

  //create grid
  for (var i = 0; i < 11; i++) {
    const row = document.createElement('div');
    row.setAttribute('class','row')

    if (i % 2 === 0) {
      for (var j = 0; j < 11; j++) {
        const col = document.createElement('div');
        // col.setAttribute('class', 'col')
        if (j % 2 === 0) {
          col.setAttribute('class', 'dot')
        } else {
          col.setAttribute('class', 'h_line');
          col.setAttribute('data-col', `${j}`);
          col.setAttribute('data-row', `${i}`);
          col.setAttribute('isClicked', 'false');
          game.h_linesArray.push(col);
        }
        row.appendChild(col)
      }
    } else {
      for (var j = 0; j < 11; j++) {
        const col = document.createElement('div');
        if (j % 2 === 0) {
          col.setAttribute('class', 'v_line');
          col.setAttribute('data-col', `${j}`);
          col.setAttribute('data-row', `${i}`);
          col.setAttribute('isClicked', 'false')
          game.v_linesArray.push(col);
        } else {
          col.setAttribute('class', 'box')
          col.setAttribute('data-col', `${j}`);
          col.setAttribute('data-row', `${i}`);
          col.setAttribute('isColored', 'false')
          game.boxesArray.push(col);
        }
        row.appendChild(col)
      }
    }
    game.plane.appendChild(row);
  }
  //end create grid
  game.boxes = document.getElementsByClassName('box');
  //===Game Board actions ===//

  //click line, line gets current player class.
  //click line and the boxes adjacent data click value ++
  // when box data click value = 4, then box gets current player class and player turn repeats.

  game.setClicks = () => {

    // HORIZONTAL LINES
    for (var i = 0; i < game.h_linesArray.length; i++) {
      game.h_linesArray[i].addEventListener('click', function (e) {
        if (e.target.innerHTML.length === 0) {
          if (game.turn) {
            game.clearArr();
            game.playerTurn.innerText = "It's Player Y's Turn!";
            e.target.setAttribute('class', 'h_line playerX');
            e.target.setAttribute('isClicked', 'true');
            game.xyArray.push(e.target.getAttribute('class'));
            game.box1();
            game.inGameScore();
            game.winCheck();
            // game.moveAgain();
            game.turn = false;

          }else {
            game.clearArr();
            game.playerTurn.innerText = "It's Player X's Turn!";
            e.target.setAttribute('class', 'h_line playerY');
            e.target.setAttribute('isClicked', 'true');
            game.xyArray.push(e.target.getAttribute('class'));
            game.box1();
            game.inGameScore();
            game.winCheck();
            // game.moveAgain();
            game.turn = true;

          };
        };
      });
    };//close for horizontal
    // VERTICAL LINES
    for (var i = 0; i < game.v_linesArray.length; i++) {
      game.v_linesArray[i].addEventListener('click', function (e) {
        if (e.target.innerHTML.length === 0) {
          console.log(game.boxesTaken);
          if (game.turn) {
            game.clearArr();
            game.playerTurn.innerText = "It's Player Y's Turn!";
            e.target.setAttribute('class', 'v_line playerX');
            e.target.setAttribute('isClicked', 'true');
            game.xyArray.push(e.target.getAttribute('class'));
            game.box1();
            game.inGameScore();
            game.winCheck();
            // game.moveAgain();
            game.turn = false;

          }else {
            game.clearArr();
            game.playerTurn.innerText = "It's Player X's Turn!";
            e.target.setAttribute('class', 'v_line playerY');
            e.target.setAttribute('isClicked', 'true');
            game.xyArray.push(e.target.getAttribute('class'));
            game.box1();
            game.inGameScore();
            game.winCheck();
            // game.moveAgain();
            game.turn = true;

          };
        };
      });
    };//close for vertical
  };//close setClicks

  game.setClicks();

});//document.addEventListener close
