/* Using the squareRoot function, map each element in the array arr to its square root. Return the new array.*/

const squared = require('./squared');

function squaredMap(arr) {
    const results = arr.map(function(x){
        return x * x
    })
    return results
}

module.exports = squaredMap;