import readline from "readline";

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const size = 10;
const grilleBateaux: string[][] = Array.from({length:size }, ()=> Array(size).fill(" ")
);

function placerBateauRandom(taille:number){
    let placed= false;

    while (!placed){
        let ligne = Math.floor(Math.random()* size);
        let column = Math.floor(Math.random()*size);
        let horizontal = Math.random() < 0.5;

        if (horizontal){
            if (column + taille <= size){
                let place = true;
                for (let i = 0; i< taille; i++){
                    if(grilleBateaux[ligne]![column+i] === 'B') place = false;
                }
            if (place){
                for (let i = 0; i < taille; i++){
                    grilleBateaux[ligne]![column+i] = "Bateau";
                }
                placed = true;
        }
      }
    } else {
      if (ligne + taille <= size) {
        let libre = true;
        for (let i = 0; i < taille; i++) {
          if (grilleBateaux[ligne + i]![column] === "Bateau") libre = false;
        }
        if (libre) {
          for (let i = 0; i < taille; i++) {
            grilleBateaux[ligne + i]![column] = "Bateau";
          }
          placed = true;
        }
      }
    }
  }
}