const { HardhatRuntimeEnvironment } = require("hardhat/types");
const { deployContract } = require("hardhat/deploy");

async function main(hre: HardhatRuntimeEnvironment) {
  const ResearchProposal = await deployContract(hre, "ResearchProposal", {
    gasPrice: 20000000000,
    gasLimit: 6721975,
    endpoint: "https://mumbai.quicknode.com",
  });

  console.log("ResearchProposal deployed to:", ResearchProposal.address);
}

module.exports = {
  main,
};
