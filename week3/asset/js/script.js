// 배터리 감소 기능
let batteryLevel = 100;
const batteryElement = document.querySelector("#batteryLevel");
const currentTime = document.querySelector(".current-time");
const decreaseBattery = () => {
  if (batteryLevel > 0) {
    batteryLevel--;
    batteryElement.textContent = batteryLevel;
  }
  if (batteryLevel === 0) {
    currentTime.style.backgroundColor = "black";
  }
};
setInterval(decreaseBattery, 1000);

// 현재 시간 표시 기능
const clockElement = document.querySelector("#clock");
const updateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clockElement.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
setInterval(updateTime, 1000);
updateTime();

// 알람 추가 기능
const alarmForm = document.querySelector("#alarmForm");
const alarmsContainer = document.querySelector("#alarms");
let alarms = [];

alarmForm.addEventListener("submit", (e) => {
  e.preventDefault(); // 폼 제출 시 새로고침 방지
  const hour = document.querySelector("#hour").value;
  const minute = document.querySelector("#minute").value;
  const second = document.querySelector("#second").value;

  try {
    // 입력이 비어 있는 경우 예외 던지기
    if (hour === "" || minute === "" || second === "") {
      throw new Error("시, 분, 초를 모두 입력하세요.");
    }

    // 시, 분, 초가 모두 0인 경우 예외 던지기
    if (hour === "0" && minute === "0" && second === "0") {
      throw new Error("00:00:00은 안됩니다.");
    }

    // 알람 최대 3개까지 추가 가능
    if (alarms.length < 3) {
      const alarmTime = `${hour.padStart(2, "0")}:${minute.padStart(
        2,
        "0"
      )}:${second.padStart(2, "0")}`;
      alarms.push(alarmTime);
      const alarmElement = document.createElement("div");
      alarmElement.textContent = `알람: ${alarmTime}`;
      alarmsContainer.appendChild(alarmElement);
    } else {
      throw new Error("알람은 최대 3개까지 추가할 수 있습니다.");
    }
  } catch (error) {
    alert(error.message); // 예외 발생 시 경고 메시지 표시
  }
});
