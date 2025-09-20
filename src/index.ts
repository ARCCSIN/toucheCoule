import readline from "readline";

const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const size = 10;
const grilleBateaux: string[][] = Array.from({length:size }, ()=> Array(size).fill(" ")
);