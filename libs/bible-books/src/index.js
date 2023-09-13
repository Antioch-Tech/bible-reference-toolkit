"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const utils_1 = require("./utils/utils");
const base_json_1 = tslib_1.__importDefault(require("./data/base.json"));
const en_json_1 = tslib_1.__importDefault(require("./data/translations/en.json"));
const it_json_1 = tslib_1.__importDefault(require("./data/translations/it.json"));
const BookWithNamesAndChapterVersesCount = [];
const allWesternTranslations = [
    en_json_1.default,
    it_json_1.default,
];
for (let i = 0; i < 66; i++) {
    const book = base_json_1.default['' + (i + 1)];
    allWesternTranslations.forEach((translation) => {
        var _a;
        let newNames = translation[i];
        if ((_a = book === null || book === void 0 ? void 0 : book.names) === null || _a === void 0 ? void 0 : _a.length) {
            newNames = book.names.concat(translation[i]);
        }
        book.names = newNames; //todo use set here
    });
    BookWithNamesAndChapterVersesCount.push(book);
}
// todo support non western translations
BookWithNamesAndChapterVersesCount.forEach((book, index) => {
    if ((book === null || book === void 0 ? void 0 : book.startNumber) && (book === null || book === void 0 ? void 0 : book.startNumber) > 0) {
        book.names = (0, utils_1.generateOrdinalNameVariations)(book.startNumber, book.names);
    }
});
exports.default = BookWithNamesAndChapterVersesCount;
//# sourceMappingURL=index.js.map