const firstPart = [
  "Amazing",
  "Amazing job",
  "Amazing progress",
  "Astounding",
  "Awesome",
  "Awesome work",
  "Beautiful effort",
  "Bravo",
  "Bravissimo",
  "Brilliant",
  "Brilliant words",
  "Congrats",
  "Congratulations",
  "Delightful",
  "Excellent",
  "Excellent job",
  "Excellent progress",
  "Excellent words",
  "Excellent work",
  "Exceptional",
  "Exceptional work",
  "Fantastic",
  "Fantastic job",
  "Fantastic progress",
  "Glorious",
  "Good progress",
  "Good words",
  "Good work",
  "Great",
  "Great job",
  "Great progress",
  "Great words",
  "Great work",
  "Impressive",
  "Impressive work",
  "Incredible",
  "Kudos",
  "Kudos to you",
  "Magnificent",
  "Marvelous",
  "Masterful",
  "Nice",
  "Nice going",
  "Nice job",
  "Nice one",
  "Nice progress",
  "Nice words",
  "Nice work",
  "Outstanding",
  "Outstanding job",
  "Perfect",
  "Remarkable",
  "You’re improving",
  "You’ve improved",
  "You’ve made progress",
  "You’ve nailed it",
  "You’ve outdone yourself",
  "Sensational",
];

const secondPart = [
  "Aim higher",
  "Another step to fluency",
  "Build on this",
  "Consistency breeds mastery",
  "Daily practice wins",
  "Do not stop",
  "Don’t lose the streak",
  "Every practice counts",
  "Grow a little every day",
  "Keep building skills",
  "Keep climbing",
  "Keep exploring",
  "Keep expressing yourself",
  "Keep going",
  "Keep going keep growing",
  "Keep going on",
  "Keep growing",
  "Keep improving",
  "Keep investing in yourself",
  "Keep it up",
  "Keep learning",
  "Keep practicing",
  "Keep polishing",
  "Keep refining",
  "Keep shining",
  "Keep studying",
  "Keep the momentum",
  "Keep the pace",
  "Keep the progress coming",
  "Keep the routine",
  "Keep the streak alive",
  "Keep training",
  "Keep working",
  "Knowledge is power",
  "Little by little",
  "Make it a habit",
  "Never stop learning",
  "One more step",
  "One step at a time",
  "Practice makes perfect",
  "Progress over perfection",
  "Push a bit further",
  "Small steps, big results",
  "Small wins matter",
  "Stay consistent",
  "Stay curious",
  "Stay focused",
  "Stay motivated",
  "Stay persistent",
];

const thirdPart = [
  "💯",
  "💪",
  "💖",
  "✨",
  "🎉",
  "🎊",
  "🎯",
  "🏆",
  "🥇",
  "🥳",
  "😉",
  "😊",
  "😄",
  "😃",
  "😎",
  "😺",
  "😁",
  "🤗",
  "🤝",
  "✌",
  "👍",
  "👏",
  "🙌",
  "🧠",
];

function generateAndCopy() {
  const firstPartR = firstPart[Math.floor(Math.random() * firstPart.length)];
  const secondPartR = secondPart[Math.floor(Math.random() * secondPart.length)];
  const thirdPartR = thirdPart[Math.floor(Math.random() * thirdPart.length)];
  const praise = document.getElementById("praise");
  const name = document.getElementById("name");
  if (name.value !== "" && name.value !== "null" && name.value !== undefined) {
    praise.innerHTML =
      firstPartR + ", " + name.value + "! " + secondPartR + " " + thirdPartR;
  } else {
    praise.innerHTML = firstPartR + "! " + secondPartR + " " + thirdPartR;
  }
  const inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = praise.innerHTML;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
  confetti({
    particleCount: 50, // Number of confetti pieces
    spread: 50, // Spread of the confetti
    origin: { x: 0.25, y: 0.9 }, // Origin point for the confetti
  });
  confetti({
    particleCount: 50, // Number of confetti pieces
    spread: 50, // Spread of the confetti
    origin: { x: 0.75, y: 0.9 }, // Origin point for the confetti
  });
}

window.addEventListener("keypress", function (event) {
  if (event.key === "Enter") generateAndCopy();
});
document.getElementById("btn").addEventListener("click", function () {
  if (true) generateAndCopy();
});
