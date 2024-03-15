// index.js

const Web3 = require('web3');

class Web3Tools {
    constructor(providerUrl, timeout = 10000) {
        this._web3 = new Web3(providerUrl, { timeout });
    }

    // Renamed from fetchTransactionReceipt to getTransactionReceipt
    getTransactionReceipt(txHash) {
        return new Promise((resolve, reject) => {
            this._web3.eth.getTransactionReceipt(txHash)
                .then(receipt => resolve(receipt))
                .catch(error => {
                    console.error('Error retrieving transaction receipt:', error);
                    reject(error);
                });
        });
    }

    // Renamed from retrieveBlock to getBlockDetails
    getBlockDetails(blockNumber) {
        return new Promise((resolve, reject) => {
            this._web3.eth.getBlock(blockNumber)
                .then(block => resolve(block))
                .catch(error => {
                    console.error('Error retrieving block details:', error);
                    reject(error);
                });
        });
    }

    // Renamed from estimateGasUsage to estimateGas
    estimateGas(txObject) {
        return new Promise((resolve, reject) => {
            this._web3.eth.estimateGas(txObject)
                .then(gas => resolve(gas))
                .catch(error => {
                    console.error('Error estimating gas usage:', error);
                    reject(error);
                });
        });
    }

    // Renamed from fetchGasPrice to getGasPrice
    getGasPrice() {
        return new Promise((resolve, reject) => {
            this._web3.eth.getGasPrice()
                .then(gasPrice => resolve(gasPrice))
                .catch(error => {
                    console.error('Error fetching gas price:', error);
                    reject(error);
                });
        });
    }

    // Renamed from fetchUserAccounts to getUserAccounts
    getUserAccounts() {
        return new Promise((resolve, reject) => {
            this._web3.eth.getAccounts()
                .then(accounts => resolve(accounts))
                .catch(error => {
                    console.error('Error fetching user accounts:', error);
                    reject(error);
                });
        });
    }

    // Renamed from deployNewContract to deployContract
    deployContract(abi, bytecode, from, gas) {
        return new Promise((resolve, reject) => {
            const contract = new this._web3.eth.Contract(abi);
            const deployment = contract.deploy({ data: bytecode });
            deployment.send({ from, gas })
                .then(deployedContract => resolve(deployedContract))
                .catch(error => {
                    console.error('Error deploying new contract:', error);
                    reject(error);
                });
        });
    }

    // Renamed from getNetworkID to getNetworkId
    getNetworkId() {
        return new Promise((resolve, reject) => {
            this._web3.eth.net.getId()
                .then(networkId => resolve(networkId))
                .catch(error => {
                    console.error('Error getting network ID:', error);
                    reject(error);
                });
        });
    }
}

module.exports = Web3Tools;
