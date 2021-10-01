// adapted from https://github.com/andys8/vscode-jest-snippets/blob/master/snippets/snippets.test.js

const cssSnippets = require("../snippets/css-snippets.json");
const reactSnippets = require("../snippets/react-snippets.json");

const allSnippets = [cssSnippets, reactSnippets];

const unique = (xs) => [...new Set(xs)];

describe.each(allSnippets)("suite $#", (snippet) => {
    it("has entries", () => {
        expect(Object.keys(snippet).length).toBeGreaterThan(0);
    });

    // TODO: get this test working
    // Currently the keys are not sorted alphabetically for react-snippets
    // it("is sorted alphabetically by key", () => {
    //     const keys = Object.keys(snippet);
    //     const sortedKeys = [...keys].sort();
    //     expect(keys).toEqual(sortedKeys);
    // })

    it("has unique prefixes", () => {
        const prefixes = Object.values(snippet).map((snippet) => snippet.prefix);
        expect(prefixes).toEqual(unique(prefixes));
    })

    describe.each(Object.keys(snippet))("%s", (key) => {
        it("has a prefix", () => {
            const { prefix } = snippet[key];
            expect(prefix).toBeDefined();
            expect(prefix).not.toEqual("");
        })

        it("has a body", () => {
            const { body } = snippet[key];
            expect(body).toBeDefined();
            expect(body).not.toEqual("");
        })

        it("has a description", () => {
            const { description } = snippet[key];
            expect(description).toBeDefined();
            expect(description).not.toEqual("");
        })
    })
})