// Take a single number n and return n squared.


function squared(n) {
    const array = [n]
    const results = array.map(function(n){
        return n * n
    })
    return results
}
