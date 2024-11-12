let userName = prompt('What is your name!?')
let userFavColor = prompt('what is your favorite color?')
let userQuest = prompt('What is your quest?')
let swallowAirSpeed = prompt('What is the air speed of an unlaiden swallow?')



let myStory = `<p>Hello ${userName}.Answer me these questions three, and the other side you'll see.</p>

<p> I see you have already answered so your quest is to ${userQuest}.</p>`

console.log(myStory)
document.getElementById('story').innerHTML = myStory