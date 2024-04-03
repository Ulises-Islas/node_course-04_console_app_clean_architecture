"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const start = 1;
const base = 5;
const max = 10;
let content = `==================================
    Multiplication tables (${base})
==================================\n`;
for (let i = start; i <= max; i++) {
    content += `\n${base} x ${i} = ${base * i}`;
}
const outputPath = `outputs`;
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/multiplication_table_${base}.txt`, content);
console.log(content);
