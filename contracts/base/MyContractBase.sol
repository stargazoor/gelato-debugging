// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.13;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/IERC20MetadataUpgradeable.sol";
import "../interfaces/ITaskCreator.sol";

    error TaskManagerNotFound();

contract MyContractBase is ERC20Upgradeable {
    event CreateTaskFailed();

    uint8 internal _decimals;

    ITaskCreator public taskCreator;

    function __PBMBase_init(string memory _name, string memory _symbol) internal onlyInitializing {
        __ERC20_init(_name, _symbol);
    }

    function createNewTask(uint256 luckyNumber) external {
        taskCreator.createTask(luckyNumber);
    }

    function cancelNewTask() external {
        if (address(taskCreator) != address(0)) {
            // Calling directly without try/catch strangely works but I want to be able to catch the error in case of any
            // Try uncommenting this line and commenting out the try/catch block below, and run the tests again to see that it strangely runs successfully.
            // taskCreator.cancelTask();

            // Calling with try/catch for some reason causes the automate contract to fail
            try taskCreator.cancelTask() returns (bool success) {} catch {
                emit CreateTaskFailed();
            }
        }
    }

    function setTaskCreator(address payable _taskCreator) external {
        taskCreator = ITaskCreator(_taskCreator);
    }
}
