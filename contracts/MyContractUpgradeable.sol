// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.13;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "./base/MyContractBase.sol";

contract MyContractUpgradeable is UUPSUpgradeable, MyContractBase {
    constructor(string memory _name, string memory _symbol) {
        initialize(_name, _symbol);
    }

    function initialize(
        string memory _name,
        string memory _symbol
    ) public initializer {
        __PBMBase_init(_name, _symbol);
    }

    // debugging test remove restriction
    function _authorizeUpgrade(address) internal view virtual override {}
}
