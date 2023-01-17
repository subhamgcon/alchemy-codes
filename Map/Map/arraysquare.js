// Given an array of elements in squaredMap, return an array with each element squared:
const squared = require('./squared');

function squaredMap(arr) {
    const results = arr.map(function(x){
        return x * x
    })
    return results
}

module.exports = squaredMap;