document.addEventListener('DOMContentLoaded', () => {

  const game = {};
//===== Game Board ====//
  game.board = document.getElementById('board');
  game.plane = document.createElement('div');

  game.board.appendChild(game.plane);

  game.rows = 11;
  game.cols = 11;


  game.rowsArray = [];
  game.tilesArray = [];
  //
  // for (var i = 0; i < game.rows; i++) {
  //   // ROW
  //   game.tr = document.createElement('div');
  //   game.rowsArray.push(game.tr);
  //   for (var k = 0; k < game.rowsArray.length; k++) {
  //     if (k % 2 === 0) {
  //       game.rowsArray[k].setAttribute('class', 'dot')
  //     }
  //   }
  //   game.area.appendChild(game.tr);
  //
  //   for (var j = 0; j < game.cols; j++) {
  //     game.td = document.createElement('div');
  //     game.td.setAttribute('class', 'cols');
  //     game.tilesArray.push(game.td);
  //     game.tr.appendChild(game.td);
  //   }
  // }//close dynamic grid

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
          col.setAttribute('class', 'h_line')
        }
        row.appendChild(col)
      }
    } else {
      for (var j = 0; j < 11; j++) {
        const col = document.createElement('div');
        if (j % 2 === 0) {
          col.setAttribute('class', 'v_line')
        } else {
          col.setAttribute('class', 'box')
        }
        row.appendChild(col)
      }
    }
    game.plane.appendChild(row);
  }

  // game.plane.appendChild(game.area);

  // console.log(game.rowsArray[0].attributes[0].value);



  //===Game Board Selectors ===//




  // game.boxesPlayerX= [];
  // game.boxesPlayerY= [];













});//document.addEventListener close
