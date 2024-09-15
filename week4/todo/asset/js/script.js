document
  .getElementById("todoInsert")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 폼 기본 제출 동작 방지

    const todoWork = document.getElementById("todoWork").value; // 입력된 할 일
    const contents = document.getElementById("contents"); // 할 일 목록이 표시될 div

    if (!todoWork.trim()) return; // 빈 입력을 방지

    // 새로운 할 일 항목을 위한 div 생성
    const newTodoDiv = document.createElement("div");
    newTodoDiv.className = "todo-item"; // 스타일을 적용할 클래스 이름

    // 입력된 값을 포함한 텍스트 노드 생성
    const todoText = document.createElement("span");
    todoText.textContent = todoWork;

    // 삭제 버튼 생성
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    deleteButton.className = "delete-button"; // 스타일을 적용할 클래스 이름
    deleteButton.onclick = function () {
      contents.removeChild(newTodoDiv); // 삭제 버튼 클릭 시 항목 제거
    };

    // 새로 생성된 요소들을 추가
    newTodoDiv.appendChild(todoText);
    newTodoDiv.appendChild(deleteButton);
    contents.appendChild(newTodoDiv);

    // 입력 필드 초기화
    document.getElementById("todoWork").value = "";
  });
