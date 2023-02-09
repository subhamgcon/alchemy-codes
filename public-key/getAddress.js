const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const sliced = publicKey.slice(1);
    console.log(sliced);
    const hash = keccak256(sliced);
    const hashed = hash.slice(-20);
    return hashed
    
}

module.exports = getAddress;