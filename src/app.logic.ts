import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const { s: start, b: base, l: limit, v: view } = yarg;

let content: string = 
`==================================
    Multiplication tables (${base})
==================================\n`;


for (let i = start; i <= limit; i++) {
    content += `\n${base} x ${i} = ${base * i}`;
}

const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/multiplication_table_${base}.txt`, content);

if (view) console.log(content);

console.log(`The file has been saved in ${outputPath}/multiplication_table_${base}.txt`);