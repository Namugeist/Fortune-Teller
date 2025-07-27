const fortunes = ["A journey begins with but a single step", "Not all those that wander are lost",
    "Intelligent discontent is the mainspring of civilization", "Do or do not there is no try"
];
function createFortune(){
    const randomIndex = Math.floor(Math.random()* fortunes.length);
    const message = fortunes[randomIndex]


    document.getElementById('message-box').textContent = message;

    }
