// 계산기 js
// 화면에는 숫자 키패드(0-9)와 사칙연산 기호(+, -, *, /) 버튼이 있습니다.
// 입력된 숫자와 연산 기호를 화면의 상단에 표시하여 사용자가 현재 입력 상황 확인 가능
// '=' 버튼을 누르면, 현재 까지의 연산 결과가 화면에 표시됩니다.
// 'C' 또는 'CE' 버튼을 통해 입력된 내용을 초기화할 수 있습니다.
// 본인만의 추가 기능을 1개 구현합니다. (예: 기존의 연산 기록을 저장하고 볼 수 있는 기능)
let counter = 0;
function press(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const display = document.getElementById("display");
    const expression = display.value; // 현재 수식 저장
    const result = eval(expression); // 수식 계산
    counter += 1;
    display.value = result; // 결과 표시

    // 기록 추가

    const resultBox = document.querySelector("#history");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `${counter}번째 계산 : ${expression} = ${result}`; // 수식과 결과를 함께 추가
    resultBox.appendChild(newDiv); // 새 div 요소를 기록 영역에 추가
  } catch {
    document.getElementById("display").value = "Error";
  }
}
