import { CreateTable } from "../domain/useCases/create-table.use-case";
import { SaveFile } from "../domain/useCases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    start: number;
    view: boolean;
    name: string;
    destination: string;
}

export class ServerApp {
    static run({ base, limit, start, view, name, destination }: RunOptions) {
        console.log('Server running...');
        const table = new CreateTable().execute({ base, limit, start });
        const wasCreated = new SaveFile().execute({ fileContent: table, destination, fileName: `${name}_${base}` });
        if (view) console.log(table);
    }
}