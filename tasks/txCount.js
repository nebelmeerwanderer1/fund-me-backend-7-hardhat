const { task } = require("hardhat/config")

task(
    "tx-count",
    "Returns the number of transactions address has ever sent"
).setAction(async (address, hre) => {
    const txcount = await hre.provider.getTransactionCount(address)
    console.log(`number of transactions ever sent by ${address} is ${txcount}`)
})

module.exports = {}
