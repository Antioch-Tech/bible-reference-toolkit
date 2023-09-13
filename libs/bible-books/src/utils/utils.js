"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJSONFilesInDirectory = exports.generateOrdinalNameVariations = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const generateOrdinalNameVariations = (startNumber, names) => {
    const variations = [];
    let numerals;
    if (startNumber === 1) {
        numerals = ['1', 'I', 'First'];
    }
    else if (startNumber === 2) {
        numerals = ['2', 'II', 'Second'];
    }
    else if (startNumber === 3) {
        numerals = ['3', 'III', 'Third'];
    }
    names.forEach((name) => {
        numerals.forEach(function (numeral) {
            variations.push(numeral + name);
            variations.push(numeral + ' ' + name);
        });
    });
    return variations;
};
exports.generateOrdinalNameVariations = generateOrdinalNameVariations;
const readJSONFilesInDirectory = (directoryPath) => {
    try {
        const files = fs_1.default.readdirSync(directoryPath);
        // Filter the files to only include JSON files
        const jsonFiles = files.filter((file) => path_1.default.extname(file) === '.json');
        return jsonFiles.map((jsonFile) => {
            const filePath = path_1.default.join(directoryPath, jsonFile);
            const data = fs_1.default.readFileSync(filePath);
            return JSON.parse(data.toString());
        });
    }
    catch (err) {
        console.error('Error reading JSON files:', err);
        throw err;
    }
};
exports.readJSONFilesInDirectory = readJSONFilesInDirectory;
//# sourceMappingURL=utils.js.map