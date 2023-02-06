const { ethers } = require("hardhat");

async function main() {
  const ResearchProposalContract = await ethers.getContractFactory("ResearchProposal");

  const deployedResearchProposalContract = await ResearchProposalContract.deploy();

  await deployedResearchProposalContract.deployed();

  console.log("ResearchProposal Contract Address:", deployedResearchProposalContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


//contract address (deployed on mumbai) -  0x528268f80FE98669D712f524aA4a66141218bbc5