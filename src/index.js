const messages = [
    "Oscar",
    "Ana",
    "Putasa",
    "Putasa",
    "Putasa",
    "Putasa",
    "Nicolay",
    "Yesica",
    "Diego",
    "Laura"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};