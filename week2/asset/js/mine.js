let gridSize = 10;
let mineCount = 10;
let grid = [];
let mineLocations = [];

function createGrid() {
  gridSize = parseInt(document.getElementById("grid-size").value);
  grid = [];
  mineLocations = [];
  const gridContainer = document.getElementById("grid-container");

  // 기존 그리드를 초기화
  gridContainer.innerHTML = "";

  // 그리드의 열과 행을 설정
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 30px)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 30px)`;

  // 지뢰 배치
  placeMines();

  // 그리드 생성
  for (let i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.setAttribute("data-row", i);
      cell.setAttribute("data-col", j);
      cell.addEventListener("click", onCellClick);
      grid[i][j] = {
        element: cell,
        isMine: mineLocations.includes(`${i},${j}`),
        isRevealed: false,
        mineCount: 0,
      };
      gridContainer.appendChild(cell);
    }
  }

  // 주변 지뢰 개수 계산
  calculateMines();
}

function placeMines() {
  let minesPlaced = 0;
  while (minesPlaced < mineCount) {
    const row = Math.floor(Math.random() * gridSize);
    const col = Math.floor(Math.random() * gridSize);
    const location = `${row},${col}`;
    if (!mineLocations.includes(location)) {
      mineLocations.push(location);
      minesPlaced++;
    }
  }
}

function calculateMines() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (!grid[i][j].isMine) {
        let count = 0;
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            const newRow = i + x;
            const newCol = j + y;
            if (
              newRow >= 0 &&
              newRow < gridSize &&
              newCol >= 0 &&
              newCol < gridSize
            ) {
              if (grid[newRow][newCol].isMine) {
                count++;
              }
            }
          }
        }
        grid[i][j].mineCount = count;
      }
    }
  }
}

function onCellClick(event) {
  const row = parseInt(event.target.getAttribute("data-row"));
  const col = parseInt(event.target.getAttribute("data-col"));

  if (grid[row][col].isMine) {
    event.target.style.backgroundColor = "red";
    alert("게임 오버! 지뢰를 클릭했습니다.");
    revealMines();
  } else {
    revealCell(row, col);
  }
}

function revealCell(row, col) {
  const cell = grid[row][col];
  if (cell.isRevealed) return;

  cell.isRevealed = true;
  cell.element.style.backgroundColor = "#bbb";
  if (cell.mineCount > 0) {
    cell.element.textContent = cell.mineCount;
  } else {
    // 주변에 지뢰가 없는 경우, 인접한 셀들도 자동으로 열기
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        const newRow = row + x;
        const newCol = col + y;
        if (
          newRow >= 0 &&
          newRow < gridSize &&
          newCol >= 0 &&
          newCol < gridSize
        ) {
          revealCell(newRow, newCol);
        }
      }
    }
  }
}

function revealMines() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j].isMine) {
        grid[i][j].element.style.backgroundColor = "red";
      }
    }
  }
}
