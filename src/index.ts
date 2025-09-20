import readline from "readline";

const readl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const size = 10;
const grilleBateaux: string[][] = Array.from({ length: size }, () =>
  Array(size).fill(" ")
);

function placerBateauRandom(taille: number) {
  let placed = false;

  while (!placed) {
    let ligne = Math.floor(Math.random() * size);
    let column = Math.floor(Math.random() * size);
    let horizontal = Math.random() < 0.5;

    if (horizontal) {
      if (column + taille <= size) {
        let place = true;
        for (let i = 0; i < taille; i++) {
          if (grilleBateaux[ligne]![column + i] === "B") place = false;
        }
        if (place) {
          for (let i = 0; i < taille; i++) {
            grilleBateaux[ligne]![column + i] = "B";
          }
          placed = true;
        }
      }
    } else {
      if (ligne + taille <= size) {
        let libre = true;
        for (let i = 0; i < taille; i++) {
          if (grilleBateaux[ligne + i]![column] === "B") libre = false;
        }
        if (libre) {
          for (let i = 0; i < taille; i++) {
            grilleBateaux[ligne + i]![column] = "B";
          }
          placed = true;
        }
      }
    }
  }
}
function genererFlotte() {
  placerBateauRandom(2);
  placerBateauRandom(3);
  placerBateauRandom(1);
  placerBateauRandom(4);
  placerBateauRandom(6);
}
genererFlotte();

function grilleJeu() {
  console.log("  A B C D E F G H I J");
  for (let ligne = 0; ligne < size; ligne++) {
    let row = "";
    for (let column = 0; column < size; column++) {
      const cell = grilleBateaux[ligne]![column];
      const bateauCache = cell === "B" ? " " : cell;
      row += bateauCache + " ";
    }
    const label = (ligne + 1).toString().padStart(2, " ");
    console.log(`${label} ${row.trim()}`);
  }
}
 function tirer(ligne: number, column:number):boolean{
    if (grilleBateaux[ligne]![column] === "B"){
        grilleBateaux[ligne]![column] = "💣"
        return true;
    }else if(grilleBateaux[ligne]![column] ===" "){
        grilleBateaux[ligne]![column] = "🌊"
        return false;    
    }
    return false;
 }
 
