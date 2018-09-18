document.addEventListener('DOMContentLoaded', () => {

  const game = {};
//===== Game Board ====//
  game.board = document.getElementById('board');
  game.playerTurn = document.getElementById('playerturn');
  game.turn = true;
  game.plane = document.createElement('div');

  game.board.appendChild(game.plane);

  game.boxesArray = [];
  game.v_linesArray = [];
  game.h_linesArray = [];


  // Create 10 rows
  // Even (starting at 0) should be DOT -> H_LINE
  // // DOT -> H_LINE should alternate
  // Odd (starting at 1) should be V_LINE -> BOX
  // // V_LINE -> BOX should alternate

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
          game.h_linesArray.push(col);
        }
        row.appendChild(col)
      }
    } else {
      for (var j = 0; j < 11; j++) {
        const col = document.createElement('div');
        if (j % 2 === 0) {
          col.setAttribute('class', 'v_line');
          game.v_linesArray.push(col);
        } else {
          col.setAttribute('class', 'box')
          col.setAttribute('data-col', `${j}`);
          col.setAttribute('data-row', `${i}`);
          game.boxesArray.push(col);
        }
        row.appendChild(col)
      }
    }
    game.plane.appendChild(row);
  }

  //===Game Board actions ===//

  //click line, line gets current player class.
  //click line and the boxes adjacent data num value ++
  // when box data num value = 4, then box gets current player class and player turn repeats.

  game.setClicks = () => {
    const boxes = document.getElementsByClassName('box');
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', (e) => {
        console.log(e.target.getAttribute('data-col'));
        console.log(e.target.getAttribute('data-row'));
      })
    }
    // HORIZONTAL LINES
    for (var i = 0; i < game.h_linesArray.length; i++) {
      game.h_linesArray[i].addEventListener('click', function (e) {
        if (e.target.innerHTML.length === 0) {
          if (game.turn) {
            game.playerTurn.innerText = "It's Player Y's Turn!";
            e.target.setAttribute('class', 'h_line playerY');
            game.turn = false;
          }else {
            game.playerTurn.innerText = "It's Player X's Turn!";
            e.target.setAttribute('class', 'h_line playerX');
            game.turn = true;
          };
        };
      });
    };
    // VERTICAL LINES
    for (var i = 0; i < game.v_linesArray.length; i++) {
      game.v_linesArray[i].addEventListener('click', function (e) {
        if (e.target.innerHTML.length === 0) {
          if (game.turn) {
            game.playerTurn.innerText = "It's Player Y's Turn!";
            e.target.setAttribute('class', 'v_line playerY');
            game.turn = false;
          }else {
            game.playerTurn.innerText = "It's Player X's Turn!";
            e.target.setAttribute('class', 'v_line playerX');
            game.turn = true;
          };
        };
      });
    };
  };//close setClicks

  game.setClicks();

  console.log(game.boxesArray[0].attributes[2].value);
  


























});//document.addEventListener close
