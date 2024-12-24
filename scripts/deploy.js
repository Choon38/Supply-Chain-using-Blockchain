const hre = require("hardhat");
async function main() {
  const Tracking = await hre.ethers.getCotractFactory("Tracking");
  const tracking = await Tracking.deploy();

    await tracking.deployed();

    console.log(`Tracking deployes to ${tracking.address}`);
  
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})