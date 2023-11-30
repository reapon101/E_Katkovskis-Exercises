let begikolaikas1 = 20;
let begikolaikas2 = 20;
let begikolaikas3 = 20;
let begikolaikas4 = 20;

let vidutinisgreitis = (begikolaikas1 + begikolaikas2 + begikolaikas3 + begikolaikas4) / 4;
if (begikolaikas1 > begikolaikas2 && begikolaikas1 > begikolaikas3 && begikolaikas1 > begikolaikas4) {
    let greicau = vidutinisgreitis - begikolaikas1;
    console.log("1" + greicau);
} else if (begikolaikas2 > begikolaikas1 && begikolaikas2 > begikolaikas3 && begikolaikas2 > begikolaikas4) {
    let greicau = vidutinisgreitis - begikolaikas2;
    console.log("2" + greicau);
} else if (begikolaikas3 > begikolaikas1 && begikolaikas3 > begikolaikas2 && begikolaikas3 > begikolaikas4) {
    let greicau = vidutinisgreitis - begikolaikas3;
    console.log("3" + greicau);
} else {
    let greicau = vidutinisgreitis - begikolaikas3;
    console.log("4" + greicau);
}