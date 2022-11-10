const insertParser = require("./parsers/insert");

const insertCommand = insertParser('INSERT { "a": 1, "b": { "c": 3 } } INTO test');

async function main() {
    console.log(await insertCommand.perform());
}

main();
// 1. Get user input
// 1.2 Choose our parser
// 2. Parse input
// 3. Excute input
// 4. Return data
// 5. Repeat

// SELECT * FROM test
// DELETE FROM test
