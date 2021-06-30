require("ts-node/register");
const HDWalletProvider = require("@truffle/hdwallet-provider");
let fs = require("fs");

const provider =()=> fs
  .readFileSync(".logs")
  .toString()
  .trim().split("\n")[30].split("      ")[1];


const mnemonic =()=> fs
  .readFileSync(".secret")
  .toString()
  .trim();


module.exports = {
  networks: {
    development: {
      // provider: ()=> new HDWalletProvider(provider(), `https://bsc-dataseed.binance.org/`),
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000,
      branch_name: "local_net",
    },
    testnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic(),
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    mainnet: {
      provider: () => 
        new HDWalletProvider(mnemonic(), "https://bsc-dataseed1.binance.org"),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
