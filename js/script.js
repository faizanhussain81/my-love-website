const screens = [...document.querySelectorAll(".screen")];
const doorScene = document.querySelector(".door-scene");
const song = document.getElementById("ourSong");
const musicToggle = document.getElementById("musicToggle");

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("openDoor").addEventListener("click", () => {
  doorScene.classList.add("open");
  window.setTimeout(() => showScreen("letter"), 1450);
});

document.getElementById("toHeart").addEventListener("click", () => showScreen("heart"));

// The heart click is a real user interaction, so browsers normally allow audio playback here.
async function startOurSong() {
  try {
    await song.play();
    musicToggle.textContent = "Pause song ❚❚";
    return true;
  } catch (error) {
    // Keep the gallery usable if the file is missing or the browser blocks playback.
    musicToggle.textContent = "Play song ▶";
    return false;
  }
}

document.getElementById("openGallery").addEventListener("click", async () => {
  showScreen("gallery");
  const started = await startOurSong();
  if (!started) {
    const musicCopy = document.querySelector(".music-copy span");
    musicCopy.textContent = "Tap Play song if it doesn't start. Check assets/music/our-song.mp3.";
  }
});

document.getElementById("replay").addEventListener("click", () => showScreen("letter"));

musicToggle.addEventListener("click", async () => {
  if (song.paused) {
    const started = await startOurSong();
    if (!started) {
      alert("The song could not play. Make sure your MP3 is saved as assets/music/our-song.mp3.");
    }
  } else {
    song.pause();
    musicToggle.textContent = "Play song ▶";
  }
});
song.addEventListener("play", () => musicToggle.textContent = "Pause song ❚❚");
song.addEventListener("pause", () => {
  if (!song.ended) musicToggle.textContent = "Play song ▶";
});
song.addEventListener("ended", () => musicToggle.textContent = "Play song ▶");

// Decorative butterflies and sparkles. These are CSS text decorations, not external assets.
const butterflyLayer = document.querySelector(".butterfly-layer");
for (let i = 0; i < 9; i++) {
  const butterfly = document.createElement("span");
  butterfly.className = "butterfly";
  butterfly.textContent = i % 2 ? "🦋" : "❀";
  butterfly.style.left = `${Math.random() * 100}%`;
  butterfly.style.animationDuration = `${18 + Math.random() * 22}s`;
  butterfly.style.animationDelay = `${-Math.random() * 35}s`;
  butterfly.style.fontSize = `${16 + Math.random() * 13}px`;
  butterflyLayer.appendChild(butterfly);
}
const sparkleLayer = document.querySelector(".sparkle-layer");
for (let i = 0; i < 24; i++) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = "✦";
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.animationDelay = `${Math.random() * 3}s`;
  sparkleLayer.appendChild(sparkle);
}


// A gentle shower of rose petals adds a softer, more romantic atmosphere.
for (let i = 0; i < 16; i++) {
  const petal = document.createElement("span");
  petal.className = "rose-petal";
  petal.textContent = i % 3 === 0 ? "♡" : "✿";
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${16 + Math.random() * 18}s`;
  petal.style.animationDelay = `${-Math.random() * 28}s`;
  petal.style.fontSize = `${11 + Math.random() * 12}px`;
  butterflyLayer.appendChild(petal);
}
