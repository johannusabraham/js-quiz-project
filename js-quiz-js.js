const aantal_vragen = [
    "Ben ik een mens?",
    "Wat is de hoofdstad van Nederland?",
    "Hoeveel dagen heeft een week?",
    "Hoelang duurt een dag?",
    "Hoeveel weken heeft een maand?"
];

const keuzes = [
    ["Ja", "Nee"],
    ["Amsterdam", "Rotterdam", "Den Haag"],
    ["5", "7", "10"],
    ["12 uur", "24 uur", "24 min"],
    ["4 weken", "3 weken", "5 weken"]
];

const juiste_antwoorden = [0, 0, 1, 1, 0];

let huidige_vraag = 0;
let score = 0;

function toonvraag() {
    document.getElementById("vraag").textContent = aantal_vragen[huidige_vraag];

    const antwoorden_mogelijk = document.getElementById("antwoorden");
    antwoorden_mogelijk.innerHTML = "";

    keuzes[huidige_vraag].forEach((keuze, index) => {
        const button = document.createElement("button");
        button.textContent = keuze;
        button.onclick = () => is_antwoord_goed(index);
        antwoorden_mogelijk.appendChild(button)
 });

 document.getElementById("feedback").textContent = "";
}

function is_antwoord_goed(index_2) {
    if (index_2 === juiste_antwoorden[huidige_vraag]) {
        score++;
        document.getElementById("feedback").textContent = "goed gedaan, dit is het juiste antwoord."
    } else {
        document.getElementById("feedback").textContent = "dit is niet het juiste antwoord."
    }

    document.getElementById("score").textContent = "score: " + score;
}

document.getElementById("volgende").onclick = () => {
    huidige_vraag++;
    if (huidige_vraag < aantal_vragen.length){
        toonvraag();
    } else {
        document.getElementById("vraag").textContent = "alle vragen zijn gemaakt";
        document.getElementById("antwoorden").innerHTML = "";
        document.getElementById("feedback").textContent = "";
        document.getElementById("volgende").style.display = "none";
    }
};

toonvraag();