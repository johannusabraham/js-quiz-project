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

function toonVraag() {
    document.getElementById("vraag").textContent = aantal_vragen[huidige_vraag];

    const antwoordenDiv = document.getElementById("antwoorden");
    antwoordenDiv.innerHTML = "";

    keuzes[huidige_vraag].forEach((keuze, index) => {
        const knop = document.createElement("button");
        knop.textContent = keuze;
        knop.onclick = () => controleerAntwoord(index);
        antwoordenDiv.appendChild(knop);
    });

    document.getElementById("feedback").textContent = "";
}

function controleerAntwoord(gekozenIndex) {
    if (gekozenIndex === juiste_antwoorden[huidige_vraag]) {
        score++;
        document.getElementById("feedback").textContent = "Goed!";
    } else {
        document.getElementById("feedback").textContent = "Fout!";
    }

    document.getElementById("score").textContent = "Score: " + score;
}

document.getElementById("volgende").onclick = () => {
    huidige_vraag++;
    if (huidige_vraag < aantal_vragen.length) {
        toonVraag();
    } else {
        document.getElementById("vraag").textContent = "Quiz voltooid!";
        document.getElementById("antwoorden").innerHTML = "";
        document.getElementById("feedback").textContent = "";
        document.getElementById("volgende").style.display = "none";
    }
};

toonVraag();
