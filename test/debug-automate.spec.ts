import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert, expect } from "chai";
import { ethers } from "hardhat";

import { IAutomate, MyContractUpgradeable, TaskCreator, TaskCreator__factory } from "../types";
import { deployTestFixtures } from "./deploy-fixture";

// Polygon Addresses
const GELATO_AUTOMATE_ADDRESS = "0x527a819db1eb0e34426297b03bae11F2f8B3A19E";

describe("TaskCreator", () => {
  let fixtures: Awaited<ReturnType<typeof deployTestFixtures>>;

  let myTestContract: MyContractUpgradeable;

  let taskCreatorContract: TaskCreator;

  let automateContract: IAutomate;

  let deployer: SignerWithAddress;

  beforeEach(async () => {
    fixtures = await loadFixture(deployTestFixtures);

    deployer = fixtures.signers.deployer;

    myTestContract = fixtures.myTestContract;

    automateContract = (await ethers.getContractAt(
      "contracts/lib/gelato/Types.sol:IAutomate",
      GELATO_AUTOMATE_ADDRESS,
    )) as IAutomate;
    taskCreatorContract = await (
      (await ethers.getContractFactory("TaskCreator")) as TaskCreator__factory
    ).deploy(GELATO_AUTOMATE_ADDRESS, deployer.address);
    await taskCreatorContract.deployed();
  });

  describe("Debugging test", () => {
    beforeEach(async () => {
      await myTestContract.connect(deployer).setTaskCreator(taskCreatorContract.address);

      await myTestContract.connect(deployer).createNewTask(123);

      const initialTaskIds = await automateContract.getTaskIdsByUser(taskCreatorContract.address);

      // We are certain that the initial task ids length is 1
      assert.equal(initialTaskIds.length, 1);
    });

    it("should cancel the task and reduce the user task IDs on the automate contract", async () => {
      /*
        What is happening is that the call to automate.cancelTask() is reverted when it really shouldn't.
       */
      await myTestContract.connect(deployer).cancelNewTask();

      const finalTaskIds = await automateContract.getTaskIdsByUser(taskCreatorContract.address);

      expect(finalTaskIds.length).to.equal(0);
    });

    it("should set the task ID to empty bytes after cancelling task on automate contract", async () => {
      await myTestContract.connect(deployer).cancelNewTask();
      /*
        Clearly, the _cancelTask(taskId) in taskCreator.cancelTask() failed and didn't go on to set myTaskId to empty bytes
       */
      const myTaskId = await taskCreatorContract.myTaskId();

      expect(myTaskId).to.equal(ethers.constants.HashZero);
    });
  });
});
