require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile pull grace local blue tribe'; 
let testAccounts = [
"0x2659efba94beb5806386c719fe22a67ac430feffa247668a7e74968754a2d54c",
"0x11e61e85562370e475cf592c9050a1cb91ce1b5a8c0ebb628664a214cc2e096d",
"0xa74cc9884833441258d71cd730d87a3abd43c05e046efc714269b924e690f1d1",
"0x657701d168e351ff9d5e5ca60230c9101c1d4876855a04b4f44d07fc0df69d9c",
"0x2d1144edc1648ae2d5e8437d32401c42946e845276c53c4dded1ea899f1d817b",
"0xc061e5c4736545ef1ea1649c2fe8eb8c11de103d5b7e5277733aafe57b47c561",
"0x3982a6fe9c6257b48ee60e57a7219d40668e791a5ce90cfc27d2fd8470ec2d9c",
"0x9bcdd8e65c7b5bb596910293ff0a79601c659ddd636b6e7c7c3e7c8f6fe25531",
"0x5f41aa4ef4356a38dcfe01c5c80f33ff08ac148d7ee808b47d6e230402fcabf7",
"0xeeb4aef8ff8099b43cb41a60065afbf158f7728e7aff4000e5a4e64dd510f5d5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


