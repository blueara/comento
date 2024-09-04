// 계산기 js
// 화면에는 숫자 키패드(0-9)와 사칙연산 기호(+, -, *, /) 버튼이 있습니다.
// 입력된 숫자와 연산 기호를 화면의 상단에 표시하여 사용자가 현재 입력 상황 확인 가능
// '=' 버튼을 누르면, 현재 까지의 연산 결과가 화면에 표시됩니다.
// 'C' 또는 'CE' 버튼을 통해 입력된 내용을 초기화할 수 있습니다.
// 본인만의 추가 기능을 1개 구현합니다. (예: 기존의 연산 기록을 저장하고 볼 수 있는 기능)
function press(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}
