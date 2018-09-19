document.addEventListener('DOMContentLoaded', () => {

  const game = {};
  //===== Game Board ====//
  game.board = document.getElementById('board');
  game.playerTurn = document.getElementById('playerturn');
  game.turn = true;
  game.plane = document.createElement('div');
  game.match = false;

  game.board.appendChild(game.plane);

  game.boxesArray = [];
  game.v_linesArray = [];
  game.h_linesArray = [];
  game.boxesCol = [1,3,5,7,9];
  game.boxesRow = [1,3,5,7,9];
  ///
  console.log(game.v_linesArray);
  // game.h_lineColCoors = [];
  // game.h_lineRowCoors = [];
  // game.v_lineColCoors = [];
  // game.v_lineRowCoors = [];
  ///
  ///
  game.allBoxes = [
    [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]
  ];

  game.box1 = () => {
    for (var i = 0; i < game.boxesArray.length; i++) {
      if (game.boxesArray[0].attributes[1].value === 1 && game.boxesArray[0].attributes[2].value === 1) {
        for (var j = 0; j < game.h_linesArray.length; j++) {
          if (game.h_linesArray[0].attributes[0].value === 'h_line playerX'){
            game.boxesArray[0].setAttribute('class', 'box playerX');
          }
        }
      }
    }
  };


  game.box1();


  // /

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
          col.setAttribute('data-col', `${j}`);
          col.setAttribute('data-row', `${i}`);
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
          game.v_linesArray.push(col);
        } else {
          col.setAttribute('class', 'box')
          col.setAttribute('data-col', `${j}`);
          col.setAttribute('data-row', `${i}`);
          col.setAttribute('data-click', 0);
          game.boxesArray.push(col);
        }
        row.appendChild(col)
      }
    }
    game.plane.appendChild(row);
  }


  game.boxes = document.getElementsByClassName('box');


  //===Game Board actions ===//

  //click line, line gets current player class.
  //click line and the boxes adjacent data click value ++
  // when box data click value = 4, then box gets current player class and player turn repeats.
  //


  // console.log(game.lineColCoors)



  game.setClicks = () => {

    // HORIZONTAL LINES
    for (var i = 0; i < game.h_linesArray.length; i++) {
      game.h_linesArray[i].addEventListener('click', function (e) {
        if (e.target.innerHTML.length === 0) {
          if (game.turn) {
            game.playerTurn.innerText = "It's Player Y's Turn!";
            e.target.setAttribute('class', 'h_line playerY');
            //
            game.box1();
            console.log(game.box1());
            // game.h_lineColCoors.push(e.target.getAttribute('data-col'));
            // game.h_lineRowCoors.push(e.target.getAttribute('data-row'));
            // game.checkBoxes();
            // console.log(game.h_lineColCoors);
            // console.log(game.h_lineRowCoors);

            game.turn = false;


          }else {
            game.playerTurn.innerText = "It's Player X's Turn!";
            e.target.setAttribute('class', 'h_line playerX');
            // game.h_lineColCoors.push(e.target.getAttribute('data-col'));
            // game.h_lineRowCoors.push(e.target.getAttribute('data-row'));
            // game.checkBoxes();
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
            ///
            // game.v_lineRowCoors.push(e.target.getAttribute('data-row'));
            // game.v_lineColCoors.push(e.target.getAttribute('data-col'));
            ///
            // game.checkBoxes();
            game.turn = false;
          }else {
            game.playerTurn.innerText = "It's Player X's Turn!";
            e.target.setAttribute('class', 'v_line playerX');
            ///
            // game.v_lineRowCoors.push(e.target.getAttribute('data-row'));
            // game.v_lineColCoors.push(e.target.getAttribute('data-col'));
            // ///
            // game.checkBoxes();
            game.turn = true;
          };
        };
      });
    };
  };//close setClicks

  game.setClicks();



  // console.log(game.boxesArray[0].attributes[2].value);
  // console.log(game.h_linesArray);
  //

























});//document.addEventListener close
