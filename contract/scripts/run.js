const { ethers } = require("hardhat");

async function main() {
  // Load the NFT contract artifacts
  const CeloNFTFactory = await ethers.getContractFactory("CeloNFT");

  // Deploy the contract
  const celoNftContract = await CeloNFTFactory.deploy();
  await celoNftContract.deployed();

  // Print the address of the NFT contract
  console.log("Celo NFT deployed to:", celoNftContract.address); // 0x8205F8cACC562BbD180b4551552aa7e49B9d8183

  // Load the marketplace contract artifacts
  const NFTMarketplaceFactory = await ethers.getContractFactory(
    "NFTMarketplace"
  );

  // Deploy the contract
  const nftMarketplaceContract = await NFTMarketplaceFactory.deploy();

  // Wait for deployment to finish
  await nftMarketplaceContract.deployed();

  // Log the address of the new contract
  console.log("NFT Marketplace deployed to:", nftMarketplaceContract.address); // 0x0D51a51aBCaC863A9369d135765a27f2e8725BBd
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });