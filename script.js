document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("text");
  const final = document.getElementById("final");

  const normalText =
    "このサイトでは色々なゲームの攻略法を書いております。\n協力してくれる方は一番下のリンクから飛んでください。";

  const horrorText =
    "助けて助けて助けて助けて助けて助けて助けて\nやめてやめてやめてやめてやめて";

  const horrorTitles = ["助けて", "見られている", "もう逃げ場はない。"];

  let colorTimer = null;
  let titleTimer = null;

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

  function startTitleChange() {
    titleTimer = setInterval(() => {
      if (Math.random() < 0.3) {
        document.title =
          horrorTitles[Math.floor(Math.random() * horrorTitles.length)];
      } else {
        document.title = "ゲーム攻略サイト";
      }
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

  // ⏱ タイムライン（一本化）
  setTimeout(() => {
    // 10秒後：ホラー開始
    startTextBlink();
    startTitleChange();

    // その3秒後：必ず最終演出
    setTimeout(finalEvent, 3000);
  }, 10000);
});
