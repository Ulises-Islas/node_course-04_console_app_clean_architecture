import fs from 'fs';
import { SaveFile } from '../../../src/domain/useCases/save-file.use-case';

describe('SaveFile', () => {
    afterEach(() => {
        fs.rmSync('outputs', { recursive: true });
    });

    test('should save file with default values', () => {
        const saveFile = new SaveFile();
        const options = {
            fileContent: 'test content'
        }
        const filePath = 'outputs/table.txt';
        const result = saveFile.execute(options);
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, 'utf8');

        expect(result).toBe(true);
        expect(checkFile).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    });
});