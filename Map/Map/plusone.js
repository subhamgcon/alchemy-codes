// The map function is stored on the Array.prototype. This means that every new array we create has access to the method!
// Take the array arr and add one to every element, return the resulting array.
function plusOne(arr) {
    const result = arr.map(function(x){
        return x + 1;
    });
    return result
}

module.exports = plusOne;