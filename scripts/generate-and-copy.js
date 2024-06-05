const firstPart = [
  'Bravo', 'Brilliant', 'Brilliant words',
  'Congrats', 'Congratulations',
  'Excellent', 'Excellent job', 'Excellent progress', 'Excellent words', 'Excellent work',
  'Good progress', 'Good words', 'Good work', 'Great', 'Great job', 'Great progress', 'Great words', 'Great work',
  'Nice', 'Nice job', 'Nice progress', 'Nice words', 'Nice work',
  'Perfect',
  'Splendid', 'Superb',
  'Way to go', 'Well done', 'Wonderful', 'Wonderful job', 'Wonderful progress', 'Wonderful words', 'Wonderful work',
  'You are doing a great job', 'You are doing great', 'You are doing well', "You're getting good at this", "You've got the skills"
];

const secondPart = ['Another step to fluency', 'Do not stop',
  'Keep exercising', 'Keep expressing yourself', 'Keep going', 'Keep going keep growing', 'Keep shining', 'Keep going on',
  'Keep growing', 'Keep it up', 'Keep learning', 'Keep practicing', 'Keep studying', 'Keep training', 'Keep working',
  'Knowledge is power', 'Small steps, big results'
];

const thirdPart = ['😉', '😊', '😎', '🙂', '🥳', '💪',
  '✌', '👍', '👏', '🙌', '💖', '✨'
];

function generateAndCopy() {
  const firstPartR = firstPart[Math.floor(Math.random() * firstPart.length)];
  const secondPartR = secondPart[Math.floor(Math.random() * secondPart.length)];
  const thirdPartR = thirdPart[Math.floor(Math.random() * thirdPart.length)];
  const praise = document.getElementById('praise');
  const name = document.getElementById('name');
  console.log(name.value);
  if (name.value !== '' && name.value !== "null" && name.value !== undefined) {
    praise.innerHTML = firstPartR + ', ' + name.value + '! ' + secondPartR + ' ' + thirdPartR;
  } else {
    praise.innerHTML = firstPartR + '! ' + secondPartR + ' ' + thirdPartR;
  }
  const inp = document.createElement('input');
  document.body.appendChild(inp);
  inp.value = praise.innerHTML;
  inp.select();
  document.execCommand('copy', false);
  inp.remove();
}

window.addEventListener("keypress", function(event) {
  if (event.key === "Enter") generateAndCopy()
});
document.getElementById("btn").addEventListener("click", function() {
  if (true) generateAndCopy()
});
