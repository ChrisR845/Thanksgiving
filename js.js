
// ===================================
// THE GREAT THANKSGIVING SHOWDOWN
// ===================================

// FOOD BATTLE

const battles = [
  { a: "🥧", an: "PUMPKIN PIE", b: "🥔", bn: "MASHED POTATOES" },
  { a: "🍗", an: "TURKEY", b: "🥐", bn: "DINNER ROLLS" },
  { a: "🧀", an: "MAC & CHEESE", b: "🥘", bn: "STUFFING" },
  { a: "🍠", an: "SWEET POTATOES", b: "🥫", bn: "CRANBERRY SAUCE" },
  { a: "🥧", an: "PECAN PIE", b: "🍎", bn: "APPLE PIE" }
];

let battleIndex = 0;
let votes = { A: 0, B: 0 };
let hasVoted = false;

function renderBattle() {
  const battle = battles[battleIndex];

  document.getElementById("emojiA").textContent = battle.a;
  document.getElementById("nameA").textContent = battle.an;
  document.getElementById("emojiB").textContent = battle.b;
  document.getElementById("nameB").textContent = battle.bn;

  votes = { A: 0, B: 0 };
  hasVoted = false;

  document.getElementById("votesA").textContent = "0 votes";
  document.getElementById("votesB").textContent = "0 votes";
  document.getElementById("voteResult").textContent =
    "MAKE YOUR CHOICE ABOVE 👆";

  document.getElementById("foodA").disabled = false;
  document.getElementById("foodB").disabled = false;
}

function vote(choice) {
  if (hasVoted) return;

  hasVoted = true;
  votes[choice]++;

  document.getElementById("votesA").textContent =
    votes.A + " votes";
  document.getElementById("votesB").textContent =
    votes.B + " votes";

  const winner = battles[battleIndex][choice === "A" ? "an" : "bn"];

  document.getElementById("voteResult").textContent =
    "🏆 YOUR CHAMPION IS " + winner + "! EXCELLENT TASTE.";

  document.getElementById("foodA").disabled = true;
  document.getElementById("foodB").disabled = true;
}

function nextBattle() {
  battleIndex = (battleIndex + 1) % battles.length;
  renderBattle();
}

// PERSONALITY QUIZ

const personalities = {
  foodie: "🍗 THE FEAST BEAST! You came, you saw, you conquered the buffet. Your plate has no boundaries.",
  sneaky: "🥧 THE SNEAKY SNACKER! You know all the best bites happen before dinner. A true Thanksgiving mastermind.",
  social: "📸 THE AESTHETIC HOST! The food must look good before anyone can eat. Your camera roll is 90% turkey.",
  napper: "😴 THE POST-FEAST LEGEND! You believe Thanksgiving is a sport, and your specialty is the championship nap."
};

function showPersonality(type) {
  const result = document.getElementById("quizResult");
  result.textContent = personalities[type];
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// CHAOS GENERATOR

const chaosMissions = [
  "Challenge someone to a turkey gobbling contest. Winner gets bragging rights.",
  "Compliment the stuffing like it just won an Olympic gold medal.",
  "Sneak a second dessert and act like absolutely nothing happened.",
  "Give the turkey a dramatic farewell speech before dinner.",
  "Start a family debate about whether cranberry sauce is actually good.",
  "Speak in a turkey voice for the next 3 minutes. No exceptions.",
  "Declare yourself the official mashed potato inspector.",
  "Take a dramatic slow-motion video of someone passing the rolls.",
  "Invent a new Thanksgiving dance. Perform it immediately.",
  "Tell someone their pie looks like a Michelin-star masterpiece.",
  "Wear a napkin as a royal cape. You are now the feast king.",
  "Make the most dramatic food review of your entire life."
];

function generateChaos() {
  const text = document.getElementById("chaosText");
  const button = document.querySelector(".chaos-card .primary-btn");

  button.disabled = true;
  button.textContent = "CONSULTING THE TURKEY...";

  text.style.opacity = "0";

  setTimeout(() => {
    const mission = chaosMissions[
      Math.floor(Math.random() * chaosMissions.length)
    ];

    text.textContent = mission;
    text.style.opacity = "1";

    button.disabled = false;
    button.textContent = "GENERATE MORE CHAOS ✨";
  }, 300);
}

// GRATITUDE WALL

function addGratitude() {
  const input = document.getElementById("gratitudeInput");
  const wall = document.getElementById("gratitudeWall");

  const message = input.value.trim();

  if (!message) {
    input.focus();
    return;
  }

  const note = document.createElement("div");
  note.className = "gratitude-note";
  note.textContent = "❤️ " + message;

  wall.prepend(note);
  input.value = "";

  note.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

document.getElementById("gratitudeInput")
  .addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      addGratitude();
    }
  });

// FALLING AUTUMN LEAVES

const leafContainer = document.getElementById("leafContainer");
const leafEmojis = ["🍂", "🍁", "✨"];

function createLeaf() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const leaf = document.createElement("span");

  leaf.className = "leaf";
  leaf.textContent = leafEmojis[
    Math.floor(Math.random() * leafEmojis.length)
  ];

  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.fontSize = (12 + Math.random() * 16) + "px";
  leaf.style.animationDuration = (7 + Math.random() * 7) + "s";

  leafContainer.appendChild(leaf);

  setTimeout(() => leaf.remove(), 15000);
}

setInterval(createLeaf, 1400);

// INITIALIZE

renderBattle();
