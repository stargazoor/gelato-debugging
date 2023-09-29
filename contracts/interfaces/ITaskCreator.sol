// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.13;

interface ITaskCreator {
    function createTask(uint256 luckyNumber) external;

    function cancelTask() external returns (bool success);
}
