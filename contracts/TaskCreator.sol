// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.13;

import "./interfaces/ITaskCreator.sol";
import "./lib/gelato/AutomateTaskCreator.sol";
import "hardhat/console.sol";

contract TaskCreator is AutomateTaskCreator, ITaskCreator {
    bytes32 public myTaskId;

    constructor(
        address payable _automate,
        address _fundsOwner
    ) AutomateTaskCreator(_automate, _fundsOwner) {}

    function createTask(uint256 luckyNumber) external {
        uint256 startTime = 12345678;

        if (myTaskId != bytes32("")) {
            revert("task id is not empty");
        }

        ModuleData memory moduleData = _createModuleData(startTime);

        bytes memory execData = abi.encodeCall(this.execute, (luckyNumber));
        bytes32 taskId = _createTask(address(this), execData, moduleData, ETH);
        myTaskId = taskId;
    }

    function cancelTask() external returns (bool) {
        bytes32 taskId = myTaskId;

        // This is really just calling automate.cancelTask(taskId)
        _cancelTask(taskId);

        myTaskId = bytes32("");

        return true;
    }

    function execute(
        uint256 luckyNumber
    ) external onlyDedicatedMsgSender returns (bool success) {
        success = true;
    }

    function _createModuleData(uint256 startTime) internal pure returns (ModuleData memory) {
        ModuleData memory moduleData = ModuleData({
            modules: new Module[](2),
            args: new bytes[](2)
        });

        moduleData.modules[0] = Module.TIME;
        moduleData.modules[1] = Module.PROXY;

        moduleData.args[0] = _timeModuleArg(startTime, 300);
        moduleData.args[1] = _proxyModuleArg();

        return moduleData;
    }

    receive() external payable {}
}
