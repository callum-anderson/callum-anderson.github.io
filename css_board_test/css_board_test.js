document.addEventListener('DOMContentLoaded', () => {
    const selected = document.querySelector('.selected');
    selected.style.backgroundColor = 'red';
    document.querySelector('#up').addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      for (i = 0; i<selected.parentNode.children.length; i++) {
        if (selected.parentNode.children[i] === selected && selected.parentNode.children[i-7] && selected.parentNode.children[i-7].classList.contains('valid-board')) {
          selected.parentNode.children[i-7].style.backgroundColor = 'red';
          selected.classList.remove('selected');
          selected.parentNode.children[i-7].classList.add('selected');
          selected.style.backgroundColor = 'azure';
        }
      }
      });
      document.querySelector('#down').addEventListener('click', () => {
        const selected = document.querySelector('.selected');
        for (i = 0; i<selected.parentNode.children.length; i++) {
          if (selected.parentNode.children[i] === selected && selected.parentNode.children[i+7] && selected.parentNode.children[i+7].classList.contains('valid-board')) {
            selected.parentNode.children[i+7].style.backgroundColor = 'red';
            selected.classList.remove('selected');
            selected.parentNode.children[i+7].classList.add('selected');
            selected.style.backgroundColor = 'azure';
          }
        }
      });
      document.querySelector('#left').addEventListener('click', () => {
        const selected = document.querySelector('.selected');
        for (i = 0; i<selected.parentNode.children.length; i++) {
          if (selected.parentNode.children[i] === selected && !(i % 7 === 0) && selected.parentNode.children[i-1].classList.contains('valid-board')) {
            selected.parentNode.children[i-1].style.backgroundColor = 'red';
            selected.classList.remove('selected');
            selected.parentNode.children[i-1].classList.add('selected');
            selected.style.backgroundColor = 'azure';
          }
        }
      });
      document.querySelector('#right').addEventListener('click', () => {
        const selected = document.querySelector('.selected');
        for (i = 0; i<selected.parentNode.children.length; i++) {
          if (selected.parentNode.children[i] === selected && !((i+1) % 7 === 0) && selected.parentNode.children[i+1].classList.contains('valid-board')) {
            selected.parentNode.children[i+1].style.backgroundColor = 'red';
            selected.classList.remove('selected');
            selected.parentNode.children[i+1].classList.add('selected');
            selected.style.backgroundColor = 'azure';
          }
        }
      });


//absolute Positioning

    const playerPiece = document.querySelector('#player-piece');
    playerPiece.style.top = 0;
    playerPiece.style.left = 0;
    let playerPosition = 0;
    document.querySelector('#forward').addEventListener('click', () => {
      forward(1);
    });
    document.querySelector('#backward').addEventListener('click', () => {
      backward(1);
    });

    function moveDown () {
        currentPositionY = playerPiece.style.top.slice(0, -2)
        currentPositionY = parseInt(currentPositionY);
        if (currentPositionY < 300) {
          currentPositionY += 50;
        }
        playerPiece.style.top = currentPositionY + 'px';
      };
    function moveUp () {
        currentPositionY = playerPiece.style.top.slice(0, -2)
        currentPositionY = parseInt(currentPositionY);
        if (currentPositionY > 0) {
          currentPositionY -= 50;
        }
        playerPiece.style.top = currentPositionY + 'px';
      };
    function moveLeft () {
        currentPositionX = playerPiece.style.left.slice(0, -2)
        currentPositionX = parseInt(currentPositionX);
        if (currentPositionX > 0) {
          currentPositionX -= 50;
        }
        playerPiece.style.left = currentPositionX + 'px';
      };
    function moveRight () {
        currentPositionX = playerPiece.style.left.slice(0, -2);
        currentPositionX = parseInt(currentPositionX);
        if (currentPositionX < 300) {
          currentPositionX += 50;
        }
        playerPiece.style.left = currentPositionX + 'px';
      };


function forward(number_of_squares) {
  let moves = number_of_squares;
  while (moves>0) {
    while (playerPosition<6) {
      moveRight();
      playerPosition++;
      moves--;
      if (moves <= 0) break;

    };
    while (playerPosition>5 && playerPosition<12) {
      if (moves <= 0) break;
      moveDown();
      playerPosition++;
      moves--;

    };
    while (playerPosition>11 && playerPosition<18) {
      if (moves <= 0) break;
      moveLeft();
      playerPosition++;
      moves--;
    };
    while (playerPosition>17 && playerPosition<24) {
      if (moves <= 0) break;
      moveUp();
      playerPosition++;
      moves--;
      if (playerPosition === 24) {
        playerPosition = 0;
      }
    };
  };
}

function backward(number_of_squares) {
  let moves = number_of_squares;
  while (moves>0) {
    while (playerPosition>17 && playerPosition<24) {
      if (moves <= 0) break;
      moveDown();
      playerPosition--;
      moves--;
    };
    while (playerPosition>11 && playerPosition<18) {
      if (moves <= 0) break;
      moveRight();
      playerPosition--;
      moves--;
    };
    while (playerPosition>5 && playerPosition<12) {
      if (moves <= 0) break;
      moveUp();
      playerPosition--;
      moves--;
    };
    while (playerPosition<6) {
      if (moves <= 0) break;
      moveLeft();
      playerPosition--;
      moves--;
      if (playerPosition === -1) {
        playerPosition = 23;
      }
    };
  };
}

  });
