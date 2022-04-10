//Modules, only share min
// common js -every file is module (by default)

const names = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-altfav");
require("./7-mind-grenade");
sayHi("sushi");
sayHi(names.john);
sayHi(names.peter);
console.log(data);
