import { CreateTable } from '../../../src/domain/useCases/create-table.use-case';

describe('CreateTable', () => {
    test('should create a table with default values', () => {
        const createTable = new CreateTable();

        const table = createTable.execute({ base: 2 });
        const rows = table.split('\n');

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 x 1 = 2');
        expect(rows.length).toBe(14);
    });

    test('should create a table with custom values', () => {
        const options = {
            base: 3,
            limit: 20
        };

        const createTable = new CreateTable();
        const table = createTable.execute(options);
        const rows = table.split('\n');

        expect(table).toContain('3 x 1 = 3');
        expect(rows.length).toBe(options.limit + 4);
    });
});