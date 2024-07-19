//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share mininmum)
const names = require('./3-names.cjs');
const hiName = require('./4-utils.cjs');
const data = require('./5-altVals.cjs')

console.log(data);
console.log(names)
//hiName(secret);
hiName(names.peter);
hiName(names.john);

