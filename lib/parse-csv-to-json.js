const fs = require("fs");

(function parseCsvToJson() {
    fs.readFile('../data/rick-head.csv', function read(err, data) {
        if (err) {
            throw err;
        }
    });
})();
