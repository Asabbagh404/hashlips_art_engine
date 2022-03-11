const fs = require("fs");
const csv = require('csv-parser');
const _ = require('lodash');

async function parseCsv() {
    let data = await readCsv();
    const transformedData = _.chain(data)
        .map((el) => {
            return {...el, weight: +el.weight}
        })
        .groupBy((e) => e.type)
        .mapValues((e) => {
            return {
                order: +_.first(e).order,
                elements: _.values(_.omit(e, ['order', 'type'])),
            }
        })
        .value()
    return transformedData
}

function readCsv() {
    return new Promise(function (resolve, reject) {
        const results = [];
        fs.createReadStream('./data/rick-head.csv')
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
                // [
                //   { NAME: 'Daffy Duck', AGE: '24' },
                //   { NAME: 'Bugs Bunny', AGE: '22' }
                // ]
            })
            .on('error', (e) => reject(e));
    });
}

module.exports = {
    parseCsv,
}
