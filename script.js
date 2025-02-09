const lyrics = [
    "We're no strangers to love",
    "You know the rules and so do I",
    "A full commitment's what I'm thinkin' of",
    "You wouldn't get this from any other guy",
    "I just wanna tell you how I'm feeling",
    "Gotta make you understand",
    "Never gonna give you up",
    "Never gonna let you down",
    "Never gonna run around and desert you",
    "Never gonna make you cry",
    "Never gonna say goodbye",
    "Never gonna tell a lie and hurt you"
];

let currentIndex = -1; // Start at -1 to show the initial message first
const messageElement = document.getElementById("message");

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const paper = document.querySelector('.paper');

    if (envelope.classList.contains('open')) {
        // If envelope is already open, cycle to the next lyric
        currentIndex = (currentIndex + 1) % lyrics.length;
        messageElement.textContent = lyrics[currentIndex];
    } else {
        // If envelope is closed, open it and show the initial message
        envelope.classList.add('open');
        messageElement.textContent = "Do You Want to be my Valentine?";
    }
}