let userName = prompt("What is your name?");
let userFavColor = prompt("What is your favorite color?");
let userQuest = prompt("What is your quest?");
let swallowAirSpeed = prompt("What is the airspeed of an unladen swallow?");

// Create the first story based on the prompts
let myStory = `
  <p>Hello <strong>${userName}</strong>. Answer me these questions three, and the other side you'll see.</p>
  <p>Your favorite color is <strong>${userFavColor}</strong>, your quest is to <strong>${userQuest}</strong>, 
  and you claim the airspeed of an unladen swallow is <strong>${swallowAirSpeed}</strong>. Bravo!</p>
`;

// Display the first story in the "story" div
document.getElementById("story").innerHTML = myStory;

// Event listener for Mad Libs form
document.getElementById("madLibForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect inputs for the Mad Libs story
  const noun = document.getElementById("noun").value;
  const verb = document.getElementById("verb").value;
  const adjective = document.getElementById("adjective").value;
  const place = document.getElementById("place").value;

  // Create the Mad Libs story
  const madLibsStory = `
    <p>Once upon a time in a faraway <strong>${place}</strong>, 
    there lived a <strong>${adjective}</strong> <strong>${noun}</strong> who loved to 
    <strong>${verb}</strong>.</p>
    <p>Every day, the <strong>${adjective}</strong> <strong>${noun}</strong> would 
    <strong>${verb}</strong> until the stars filled the sky. 
    It was a magical life in <strong>${place}</strong>!</p>
  `;

  // Append the Mad Libs story to the "story" div
  document.getElementById("story").innerHTML += madLibsStory;
});