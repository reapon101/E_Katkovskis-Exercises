// Statybininkams reikia pastatyti siena, kurios ilgis yra 4 metrai, o aukstis 3 metrai (a ir h yra sveikieji skaiciai).
let sienosIlgis = 400;
let sienosAukstis = 300;
let plytkaina = 0.5;
let sienosplotas = sienosIlgis * sienosAukstis;
console.log(sienosplotas);
let plytosIlgis = 20;
let plytosAukstis = 10;
let plytosplotas = plytosIlgis * plytosAukstis;
console.log(plytosplotas);

let plytureikes = sienosplotas / plytosplotas;
let plytoskainuos = plytureikes * plytkaina;
console.log("PLytu reikes " + plytureikes + " vienetu" + ", kurios kainuos " + plytoskainuos + " Eur");
