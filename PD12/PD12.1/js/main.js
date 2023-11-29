// Paskaitu kiekis
let paskaitukiekis = {
    pirmadieni: 5,
    antradieni: 6,
    trečiadini: 4,
    ketvirtadieni: 5,
    penktadieni: 4,
}

// Kiek paskaitų turi jis per savaitę?
paskaitukiekis = 5 + 6 + 4 + 5 + 4;
console.log(paskaitukiekis + " paskaitos per savaitę");

// Kiek tai sudaro minučių? Viena paskaita trunka 45 minutes.
let paskaitulaikas = paskaitukiekis * 45;
console.log(paskaitulaikas + " minučių i savaite");
