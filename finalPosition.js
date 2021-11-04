

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition (moves) {
  let x = 0;
  let y = 0;
  for (const move of moves) {
    if (move === 'east') {
      x += 1;
    } else if (move === 'west') {
      x -= 1;
    } else if (move === 'north') {
      y += 1;
    } else if (move === 'south') {
      y -= 1;
    }
  }
  let position = [x, y];
  return position;
}

console.log(finalPosition(moves));
