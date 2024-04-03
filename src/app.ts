import fs from "fs";

const start = 1;
const base = 5;
const max = 10;
let content: string = 
`==================================
    Multiplication tables (${base})
==================================\n`;


for (let i = start; i <= max; i++) {
    content += `\n${base} x ${i} = ${base * i}`;
}

const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/multiplication_table_${base}.txt`, content);

console.log(content);

