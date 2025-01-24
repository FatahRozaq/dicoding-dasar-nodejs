const fs = require('fs');

const readFileCallback = (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
}

fs.readFile('./filesystem/notes.txt', 'utf8', readFileCallback);

