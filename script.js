const text = document.getElementById("text");
const final = document.getElementById("final");

const normalText =
"このサイトでは色々なゲームの攻略法を書いております。\n協力してくれる方は一番下のリンクから飛んでください。";

const horrorText =
"助けて助けて助けて助けて助けて助けて助けて\nやめてやめてやめてやめてやめて";

const horrorTitles = ["助けて", "見られている", "もう逃げ場はない。"];

let colorTimer = null;
let titleTimer = null;

/* 文字点滅 */
function startTextBlink() {
  colorTimer = setInterval(() => {
    if (text.dataset.state === "red") {
      text.style.color = "white";
      text.textContent = normalText;
      text.dataset.state = "white";
    } else {
      text.style.color = "red";
      text.textContent = horrorText;
      text.dataset.state = "red";
    }
  }, 200);
}

/* タブ名変更 */
function startTitleChange() {
  titleTimer = setInterval(() => {
    if (Math.random() < 0.3) {
      document.title = horrorTitles[Math.floor(Math.random() * horrorTitles.length)];
    } else {
      document.title = "ゲーム攻略サイト";
    }
  }, 500);
}

/* 🔥 最終演出（必ず来る） */
function finalEvent() {
  clearInterval(colorTimer);
  clearInterval(titleTimer);

  document.title = "……";

  text.style.display = "none";
  final.classList.remove("hidden");

  // 5秒後に強制退出
  setTimeout(() => {
    location.replace("about:blank");
  }, 5000);
}

/* ⏱ タイムライン（超重要） */
setTimeout(() => {
  // 10秒後：ホラー開始
  startTextBlink();
  startTitleChange();
}, 10000);

setTimeout(() => {
  // 13秒後：最終演出（←ここが今まで来てなかった）
  finalEvent();
}, 13000);
