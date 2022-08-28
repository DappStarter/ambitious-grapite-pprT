require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile provide include argue bottom try'; 
let testAccounts = [
"0xb5d26b26e547c3bcc50119987d80096237e5f14cda1b68549f15cc6b8d3b6881",
"0xa9dd6b54ac5bb88dc6d6fe8ec5f702f7efdcf73291444259796e1b56e7c896ea",
"0xa42549b127824343168d21ebfcccf1fc2bd8effb86c8064bff8b3f881a22308b",
"0xba88101620c9acea11fb4261956eb707d53d6773893eb79fff657a4ed37cfdfd",
"0x489c2a962c1e68bb0e0cb23fb2e777afce69debc52db9c94c75b415803effdf3",
"0xab19e0a6dc8947b0ac0ef42a12a0f7ae9e35ccd6e1bb47dbf3cc6256b5180f07",
"0x97580a38cbb095c931bd1437b2d52081e219ac6585fbf90d0bd11acc4eda9b4c",
"0xf72a0f8787a53e5295da43d6a93645e282a4d7165aa6d93f7a8f0fb26feac0a3",
"0xde97636421319ea7054d40476ba439fa27b0e540bcdbc2cdd579e1589cca57ab",
"0x059ff9600808193ce1261c03270ad1a3ff5fc0c169cf36e29ca4e962a594dc7f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

