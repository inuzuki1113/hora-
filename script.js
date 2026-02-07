setTimeout(() => {
  document.getElementById("text").style.display = "none";

  const final = document.getElementById("final");
  final.classList.remove("hidden");
  final.classList.add("shake");

  setTimeout(() => {
    location.href = "about:blank";
  }, 5000);

}, 5000);
