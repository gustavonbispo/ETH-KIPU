const { ethers } = require("ethers");

const alchemyUrl = 'https://eth-mainnet.g.alchemy.com/v2/0-G6gebbxwYONh5iWF4F5IyDf-rAuTde';

const provider = new ethers.JsonRpcProvider(alchemyUrl);

const address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";

async function getBalance() {
  try {
    const balance = await provider.getBalance(address);
    console.log("Saldo de la cuenta:", ethers.formatEther(balance), "ETH");
  } catch (e) {
    console.error("Error al obtener el saldo de la cuenta", e);
  }
}

getBalance();