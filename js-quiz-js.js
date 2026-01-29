const aantal_vragen = [
    "Ben ik een mens?",
    "Wat is de hoofdstad van Nederland?",
    "Hoeveel dagen heeft een week?",
    "hoelang duurt een dag?",
    "hoeveel weken heeft een maand?"
];

const keuzes = [
    ["Ja", "Nee"],
    ["Amsterdam", "Rotterdam", "Den Haag"],
    ["5", "7", "10"],
    ["12 uur", "24 uur", "24 min"],
    ["4 weken", "3 weken", "5 weken"]
];

const juiste_antwoorden = [
    0, 
    0, 
    1,
    1,
    0
];

let huidige_vraag = 0;
let score = 0;

console.log("vragen:", aantal_vragen);
console.log("keuzes:", keuzes);
console.log("juiste antwoorden:", juiste_antwoorden);
console.log("huidige vraag:", huidige_vraag);
console.log("Score:", score);

function toonVraag() {
    const vraagElement = document.getElementById("vraag");
    vraagElement.textContent = aantal_vragen[huidige_vraag];
}

toonVraag();
