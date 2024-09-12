// 기존 사용자 목록
const users = [
  { id: "user1", password: "password1" },
  { id: "user2", password: "password2" },
];

// 폼 제출 이벤트 리스너
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // 폼 기본 제출 동작 방지

    const inputId = document.getElementById("id").value;
    const inputPassword = document.getElementById("password").value;
    const inputPasswordCheck = document.getElementById("passwordCheck").value;
    // 이미 존재하는 ID인지 확인

    try {
      if (inputPassword !== inputPasswordCheck) {
        throw new Error("비밀번호가 일치하지 않습니다.");
      }
      const userExists = users.some((user) => user.id === inputId);

      if (userExists) {
        alert("가입 불가능: 이미 존재하는 ID입니다.");
        document.getElementById("registerForm").reset();
      } else {
        // 새로운 사용자 객체 생성 후 추가
        users.push({ id: inputId, password: inputPassword });
        alert("가입 성공: 새로운 사용자로 등록되었습니다.");

        // 폼 초기화
        document.getElementById("registerForm").reset();
      }
    } catch (error) {
      alert(error.message);
    }
  });
