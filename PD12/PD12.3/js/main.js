// Statybininkams reikia pastatyti siena, kurios ilgis yra 4 metrai, o aukstis 3 metrai (a ir h yra sveikieji skaiciai). Konvertuoju i centimetrus
let sienosIlgis = 400;
let sienosAukstis = 300;
let plytoskaina = 0.5;

let sienosplotas = sienosIlgis * sienosAukstis;
console.log(sienosplotas); // 120000

let plytosIlgis = 20;
let plytosAukstis = 10;
let plytosplotas = plytosIlgis * plytosAukstis;
console.log(plytosplotas); // 200

// Kiek plytu reikes?
let plytuskaicius = sienosplotas / plytosplotas;
console.log(plytuskaicius); // 600 plytu

// Kiek tu plytu kainuos?
let plytukaina = plytuskaicius * plytoskaina;
console.log(plytukaina.toPrecision(5));
