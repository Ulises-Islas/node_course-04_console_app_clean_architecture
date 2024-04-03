export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;

}

export interface CreateTableOptions {
    base: number;
    limit?: number;
    start?: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor() { }

    execute({ base, limit = 10, start = 1 }: CreateTableOptions) {
        let content: string =
            `==================================
    Multiplication tables (${base})
==================================\n`;

        for (let i = start; i <= limit; i++) {
            content += `\n${base} x ${i} = ${base * i}`;
        }

        return content;
    }
}