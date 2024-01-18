// Kuro bako talpa = 112 litrai
// Kuro sanaudos n = 11
// Lygynemis dienomis suvartos = 1 litro degalu
// Nelyginemis dienomis suvartos = 2 litru degalu
let gasVolune = 112;
let gasRes = 11;
let dayCount = 0;
for (let i = 0; i < 100; i++) {
    if (gasVolune <= 0) {
        break;
    }
    if (i % 2 != 0) {
        gasVolune -= 11;
        dayCount++
    } else {
        gasVolune -= 22;
        dayCount++;
    }
}
console.log(dayCount);