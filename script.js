const text = document.getElementById("text");
const final = document.getElementById("final");

const normalText =
"このサイトでは色々なゲームの攻略法を書いております。\n協力してくれる方は一番下のリンクから飛んでください。";

const horrorText =
"助けて助けて助けて助けて助けて助けて助けて\nやめてやめてやめてやめてやめて";

const horrorTitles = ["助けて", "見られている", "もう逃げ場はない。"];

let colorTimer;
let titleTimer;

function startTextBlink() {
  text.dataset.state = "white";
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

function startTitleChange() {
  titleTimer = setInterval(() => {
    document.title =
      Math.random() < 0.3
        ? horrorTitles[Math.floor(Math.random() * horrorTitles.length)]
        : "ゲーム攻略サイト";
  }, 500);
}

function finalEvent() {
  clearInterval(colorTimer);
  clearInterval(titleTimer);

  document.title = "……";
  text.style.display = "none";
  final.classList.remove("hidden");

  setTimeout(() => {
    location.replace("about:blank");
  }, 5000);
}

setTimeout(() => {
  startTextBlink();
  startTitleChange();
}, 10000);

setTimeout(() => {
  finalEvent();
}, 13000);
