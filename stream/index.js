const fs = require('fs');

const files = fs.readFileSync('./stream/input.txt', 'utf8');

const writeableStream =fs.createWriteStream('./stream/output.txt');

writeableStream.write(files);