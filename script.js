//exmple1
/*
let length = 8
let side = 400/length;
let arr = []

for (let i = 0; i < length; i++) {
    arr[i] = []
    for (let j = 0; j < length; j++) {
      arr[i][j] = i == j 
    }
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {   
      if (arr[i][j] == 1) {
        fill(0, 225, 0)
      } else {
        fill(255, 255, 255)
      }
      rect(j * side, i * side, side, side)
    }
  }
}
*/











//example2
/*
let sizeX = 400, sizeY = 400
let length = 8
let side = sizeX/length;
let arr = []

for (let i = 0; i < length; i++) {
    arr[i] = []
    for (let j = 0; j < length; j++) {
      let lastX = length-j-1
      arr[i][lastX] = lastX == length-i-1 ? 1 : 0 
    }
}

function setup() {
  createCanvas(sizeX, sizeY);
  background(220);
}

function draw() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {   
      if (arr[i][j] == 1) {
        fill(255, 0, 0)
      } else {
        fill(255, 255, 255)
      }
      rect(j * side, i * side, side, side)
    }
  }
}
*/










//example3
/*
let sizeX = 400, sizeY = 400
let length = 8
let side = sizeX/length;
let arr = []

let total = length
for (let i = 0; i < length; i++) {
  arr[i] = []
  for (let j = 0; j < length; j++) {
    arr[i][j] = j < total ? 1 : 0
  }
  total -= 1
}

function setup() {
  createCanvas(sizeX, sizeY);
  background(220);
}

function draw() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {   
      if (arr[i][j] == 1) {
        fill(255, 255, 0)
      } else {
        fill(255, 255, 255)
      }
      rect(j * side, i * side, side, side)
    }
  }
}
*/











//example4
/*
let sizeX = 400, sizeY = 400
let length = 8
let side = sizeX/length;
let arr = []

//algorithm1
let isWhite = false
for (let i = 0; i < length; i++) {
  arr[i] = []
  for (let j = 0; j < length; j++) {
    arr[i][j] = isWhite
    isWhite = !isWhite
  }
  isWhite = !isWhite
}

//algorithm2
//let isWhite = 0
//for (let i = 0; i < length; i++) {
//  arr[i] = []
//  for (let j = 0; j < length; j++) {
//    arr[i][j] = isWhite % 2
//    isWhite += 1
//  }
//  isWhite += 1
//}

function setup() {
  createCanvas(sizeX, sizeY);
  background(220);
}

function draw() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {   
      if (arr[i][j] == 1) {
        fill(255, 255, 255)
      } else {
        fill(0, 0, 0)
      }
      rect(j * side, i * side, side, side)
    }
  }
}
*/











//example5
//let sizeX = 600, sizeY = 600
//let length = 11
//let side = sizeX / length;
//let arr = []
//
//for (let i = 0; i < length; i++) {
//   arr[i] = []
//   for (let j = 0; j < length; j++) {
//      if (i == 0 && j == 0)
//         arr[i][j] = 'X'
//      else if (i == 0)
//         arr[i][j] = j
//      else if (j == 0)
//         arr[i][j] = i
//      else
//         arr[i][j] = i * j
//   }
//}
//
//function setup() {
//   createCanvas(sizeX, sizeY);
//   background(220)
//   textSize(22);
//}
//
//function draw() {
//   for (let i = 0; i < arr.length; i++) {
//      for (let j = 0; j < arr[i].length; j++) {
//         rect(j * side, i * side, side, side)
//         text(arr[i][j], j * side + side / 3, i * side + side / 1.5);
//      }
//   }
//}

























//AMAZE
let side = 20;
let arr = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 3, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let playerCoords = {
  x: 1,
  y: 1
}

function updateMatrix(matrix, coords) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i == coords.y && j == coords.x) {
        matrix[i][j] = 2
      } else if (matrix[i][j] == 2) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}

function setup() {
  createCanvas(arr[0].length * side, arr.length * side);
  noStroke()
}

function draw() {

  arr = updateMatrix(arr, playerCoords)

  if (keyIsDown(LEFT_ARROW) && arr[playerCoords.y][playerCoords.x - 1] != 1)
    playerCoords.x -= 1;
  else if (keyIsDown(RIGHT_ARROW) && arr[playerCoords.y][playerCoords.x + 1] != 1)
    playerCoords.x += 1;
  else if (keyIsDown(UP_ARROW) && arr[playerCoords.y - 1][playerCoords.x] != 1)
    playerCoords.y -= 1;
  else if (keyIsDown(DOWN_ARROW) && arr[playerCoords.y + 1][playerCoords.x] != 1)
    playerCoords.y += 1;

  if (arr[playerCoords.y][playerCoords.x] == 3) {
    document.write('<h1 style=\'font-family: Roboto, thin; color: green;\'>You Won!</h1>')
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0)
        fill(255, 255, 255)
      else if (arr[i][j] == 1)
        fill(8, 20, 30)
      else if (arr[i][j] == 2)
        fill(255, 23, 23)
      else if (arr[i][j] == 3)
        fill(255, 228, 34)
      rect(j * side, i * side, side, side)
    }
  }
}

/*
function keyPressed() {
  if (keyCode === LEFT_ARROW && arr[playerCoords.y][playerCoords.x - 1] != 1)
    playerCoords.x -= 1;
  if (keyCode === RIGHT_ARROW && arr[playerCoords.y][playerCoords.x + 1] != 1)
    playerCoords.x += 1;
  if (keyCode === UP_ARROW && arr[playerCoords.y - 1][playerCoords.x] != 1)
    playerCoords.y -= 1;
  if (keyCode === DOWN_ARROW && arr[playerCoords.y + 1][playerCoords.x] != 1)
    playerCoords.y += 1;

  if (arr[playerCoords.y][playerCoords.x] == 3) {
    document.write('<h1 style=\'font-family: Roboto, thin; color: green;\'>You Won!</h1>')
  }
}
*/