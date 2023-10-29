const rle = require('./app');


const compressedResult = rle("aaaabbb", true);
const compressedResult2 = rle("a3b5", false);

console.log(compressedResult);
console.log(compressedResult2);

