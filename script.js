let adventurerName = prompt("What is your name?");
let adventurerColor = prompt("What is your favorite color?");

// Create the first story based on the prompts
let firstStory = `
  <p>Greetings, <strong>${adventurerName}</strong>! You stand at the edge of a great journey.</p>
  <p>Your favorite color, <strong>${adventurerColor}</strong>, shines bright in your destiny.</p>
`;

// Display the first story in the "story" div
document.getElementById("story").innerHTML = firstStory;

// Event listener for the Mad Libs form
document.getElementById("madLibForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect inputs for the Mad Libs story
  const creature = document.getElementById("creature").value;
  const activity = document.getElementById("activity").value;
  const description = document.getElementById("description").value;
  const magicalLand = document.getElementById("magicalLand").value;

  // Create the Mad Libs story
  const madLibsStory = `
    <p>In the mystical land of <strong>${magicalLand}</strong>, 
    there lived a <strong>${description}</strong> <strong>${creature}</strong>.</p>
    <p>Each day, the <strong>${description}</strong> <strong>${creature}</strong> would 
    <strong>${activity}</strong> under the golden sun, bringing joy to all who beheld it.</p>
    <p>Life in <strong>${magicalLand}</strong> was full of wonder and magic, 
    thanks to the <strong>${creature}</strong>'s delightful antics.</p>
  `;

  // Append the Mad Libs story to the "story" div
  document.getElementById("story").innerHTML += madLibsStory;
});
