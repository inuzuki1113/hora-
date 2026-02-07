const text = document.getElementById("text");
const final = document.getElementById("final");

let colorInterval;
let titleInterval;

const normalText =
"このサイトでは色々なゲームの攻略法を書いております。\n協力してくれる方は一番下のリンクから飛んでください。";

const horrorText =
"助けて助けて助けて助けて助けて助けて助けて\nやめてやめてやめてやめてやめて";

const horrorTitles = ["助けて", "見られている", "もう逃げ場はない。"];

// 文字色と内容を切り替え
function startTextEffect() {
  colorInterval = setInterval(() => {
    if (text.style.color === "red") {
      text.style.color = "white";
      text.textContent = normalText;
    } else {
      text.style.color = "red";
      text.textContent = horrorText;
    }
  }, 200);
}

// タブ名ランダム
function startTitleEffect() {
  titleInterval = setInterval(() => {
    const r = Math.random();
    if (r < 0.3) {
      document.title = horrorTitles[Math.floor(Math.random() * horrorTitles.length)];
      clearInterval(titleInterval);
      setTimeout(startTitleEffect, 5000); // ホラー時は5秒停止
    } else {
      document.title = "ゲーム攻略サイト";
    }
  }, 300);
}

// 最終演出
function finalEvent() {
  clearInterval(colorInterval);
  clearInterval(titleInterval);

  text.style.display = "none";
  final.classList.remove("hidden");

  setTimeout(() => {
    location.href = "about:blank";
  }, 5000);
}

// 時間制御
setTimeout(() => {
  // 10秒後に点滅開始
  startTextEffect();
  startTitleEffect();

  // さらに3秒後に最終演出
  setTimeout(finalEvent, 3000);
}, 10000);
