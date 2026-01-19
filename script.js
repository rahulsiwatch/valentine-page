const messages = [
  "From the day i met you!!",
  "To every ups and down, together and forever❤️",
  "To this day and the days that has to come. I LOVE YOU"
];

let yesSize = 1.1;
let noSize = 1.0;

function openMessage(index) {
  document.getElementById("popup-text").innerText = messages[index];
  document.getElementById("overlay").style.display = "flex";
}

function closeMessage() {
  document.getElementById("overlay").style.display = "none";
}

function no() {
  yesSize += 0.3;
  noSize -= 0.15;

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  yesBtn.style.fontSize = yesSize + "rem";
  noBtn.style.fontSize = Math.max(noSize, 0.5) + "rem";

  if (noSize < 0.6) {
    noBtn.innerText = "Nice try 😌";
    noBtn.disabled = true;
    noBtn.style.opacity = 0.5;
  }
}

function yes() {
  document.getElementById("celebration").style.display = "block";

  for (let i = 0; i < 35; i++) {
    createHeart();
  }

  setTimeout(() => {
    alert("Happy Valentine’s Day ❤️\nYou make my world better.");
  }, 1500);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  document.getElementById("celebration").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}
