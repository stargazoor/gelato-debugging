import { HardhatEthers } from "../common/types";
import { deployUpgradeableContract, resolveEthers } from "../common/utils";
import { MyContractUpgradeable__factory } from "../types";

export async function deployTestFixtures(params?: any, ethers?: HardhatEthers) {
  ethers = await resolveEthers(ethers);
  const [deployer] = await ethers.getSigners();

  const contractParams = {
    name: "Test",
    symbol: "TEST",
  };

  const myContractFactory = (await ethers.getContractFactory(
    "MyContractUpgradeable",
  )) as MyContractUpgradeable__factory;
  const myContractImpl = await myContractFactory
    .connect(deployer)
    .deploy(contractParams.name, contractParams.symbol);
  await myContractImpl.deployed();
  const myTestContract = await deployUpgradeableContract(
    {
      deployer,
      contract: myContractImpl,
      data: myContractImpl.interface.encodeFunctionData("initialize", [
        contractParams.name,
        contractParams.symbol,
      ]),
    },
    ethers,
  );

  return {
    myTestContract,

    signers: {
      deployer,
    },
  };
}
