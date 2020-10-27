const jokes = ["I used to have a job at a calendar factory but I got the sack because I took a couple of days off.",
    "I’m thinking about removing my spine. I feel like it’s only holding me back.",
    "Did you hear about the two thieves who stole a calendar. They each got six months.",
    "I’m terrified of elevators…so I’m going to start taking steps to avoid them.",
    "I used to hate facial hair… but then it grew on me.",
    "Three fish are in a tank. One asks the others, “How do you drive this thing?”",
    "Why don’t crabs donate? Because they’re shellfish.",
    "What’s the best part about living in Switzerland? I don’t know, but the flag is a big plus.",
    "Don’t worry if you miss a gym session. Everything will work out.",
    "Ever tried to eat a clock? It’s time-consuming."]

function jokeGenerator() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]

    return randomJoke
}

function dateGenerator() {
    const dateAndTime = new Date().toString().slice(0, 24)

    return `The joke of the second (${dateAndTime}):`
}

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("joke").innerHTML = jokeGenerator();
    document.getElementById("message").innerHTML = dateGenerator();
});
