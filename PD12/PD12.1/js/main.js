// Paskaitu kiekis
let pirmadienis = 5;
let antradienis = 6;
let trečiadinis = 4;
let ketvirtadienis = 5;
let penktadienis = 4;

// Kiek paskaitų turi jis per savaitę?
let paskaitukiekis = pirmadienis + antradienis + trečiadinis + ketvirtadienis + penktadienis;
console.log(paskaitukiekis + " paskaitu per savaite");

// Kiek tai sudaro minučių? Viena paskaita trunka 45 minutes.
let paskaitulaikas = paskaitukiekis * 45;
console.log(paskaitulaikas + " minuciu");
