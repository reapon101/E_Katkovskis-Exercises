// Statybininkams reikia pastatyti siena, kurios ilgis yra 4 metrai, o aukstis 3 metrai (a ir h yra sveikieji skaiciai). Konvertuoju i centimetrus
let sienosIlgis = 4;
let sienosAukstis = 3;
let plytoskaina = 0.5;

let sienosplotas = sienosIlgis * sienosAukstis;
console.log(sienosplotas); // 120000

let plytosIlgis = 0.2;
let plytosAukstis = 0.1;
let plytosplotas = plytosIlgis * plytosAukstis;
console.log(plytosplotas); // 200

// Kiek plytu reikes?
let plytuskaicius = sienosplotas / plytosplotas;
console.log(plytuskaicius); // 600 plytu

// Kiek tu plytu kainuos?
let plytukaina = plytuskaicius * plytoskaina;
console.log(plytukaina.toPrecision(5));
