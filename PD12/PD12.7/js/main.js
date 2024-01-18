// Žemiau  pateiktas kodas yra mano pirmassis bandymas sprendžiant šitą užduotį
//
// let begikolaikas1 = 20;
// let begikolaikas2 = 20;
// let begikolaikas3 = 20;
// let begikolaikas4 = 20;

// let vidutinisgreitis = (begikolaikas1 + begikolaikas2 + begikolaikas3 + begikolaikas4) / 4;
// if (begikolaikas1 > begikolaikas2 && begikolaikas1 > begikolaikas3 && begikolaikas1 > begikolaikas4) {
//     let greicau = vidutinisgreitis - begikolaikas1;
//     console.log("1" + greicau);
// } else if (begikolaikas2 > begikolaikas1 && begikolaikas2 > begikolaikas3 && begikolaikas2 > begikolaikas4) {
//     let greicau = vidutinisgreitis - begikolaikas2;
//     console.log("2" + greicau);
// } else if (begikolaikas3 > begikolaikas1 && begikolaikas3 > begikolaikas2 && begikolaikas3 > begikolaikas4) {
//     let greicau = vidutinisgreitis - begikolaikas3;
//     console.log("3" + greicau);
// } else {
//     let greicau = vidutinisgreitis - begikolaikas3;
//     console.log("4" + greicau);
// }

// Šitas kodas yra patobulintas prieštai parašytame jau

const begikai = [22.2, 20.3, 25.4, 25];
let begikuSkaicius = 4;
let vidlaikas = 0;
for (let begikas = 0; begikas < begikai.length; begikas++) {
    vidlaikas += begikai[begikas];
}
vidlaikas /= begikai.length;
console.log('Vidutinis laikas: ' + vidlaikas);
begikai.sort();
console.log('Begiku laikas nuo greiciausio iki leciausio: ' + begikai);
console.log('Greiciausio begiko laiko skirtumas: ' + (vidlaikas - begikai[0]))
