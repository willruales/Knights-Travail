// Define a function to represent the chessboard.
function createChessboard() {
  const chessboard = [];
  for (let i = 0; i < 8; i++) {
    chessboard[i] = [];
    for (let j = 0; j < 8; j++) {
      chessboard[i][j] = null; // Initialize all squares as empty
    }
  }
  return chessboard;
}

// Define a function to check if a square is valid and not visited.
function isValidSquare(x, y, chessboard) {
  return x >= 0 && x < 8 && y >= 0 && y < 8 && chessboard[x][y] === null;
}

// Define the possible moves a knight can make.
const knightMoves = [
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, -2],
  [2, -1],
  [2, 1],
  [1, 2],
];

// Define the main function to find the shortest path.
function knightShortestPath(startX, startY, targetX, targetY) {
  const chessboard = createChessboard();
  const queue = [];

  queue.push({ x: startX, y: startY, distance: 0 });
  chessboard[startX][startY] = 0;

  while (queue.length > 0) {
    const { x, y, distance } = queue.shift();

    if (x === targetX && y === targetY) {
      return distance;
    }

    for (const [dx, dy] of knightMoves) {
      const newX = x + dx;
      const newY = y + dy;

      if (isValidSquare(newX, newY, chessboard)) {
        chessboard[newX][newY] = distance + 1;
        queue.push({ x: newX, y: newY, distance: distance + 1 });
      }
    }
  }

  return -1; // If no path is found
}

// Example usage:
const startX = 0;
const startY = 0;
const targetX = 7;
const targetY = 7;

const shortestPath = knightShortestPath(startX, startY, targetX, targetY);
console.log(`Shortest path from (${startX}, ${startY}) to (${targetX}, ${targetY}) is ${shortestPath} moves.`);
