// Paskaitu kiekis kiekviena savaite:
let paskaitukiekis = {
    pirmadienis: 5,
    antradienis: 6,
    trečiadinis: 4,
    ketvirtadienis: 5,
    penktadienis: 4,
}

// Kiek paskaitų turi jis per savaitę?
paskaitukiekis = 5 + 6 + 4 + 5 + 4;
console.log(paskaitukiekis + " paskaitos per savaitę");

// Kiek tai sudaro minučių? Viena paskaita trunka 45 minutes.
let paskaitulaikas = paskaitukiekis * 45;
console.log(paskaitulaikas + " minučių i savaite");
