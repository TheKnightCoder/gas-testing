//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WithoutCounterLib2 {
    uint256 private count;

    function increment() internal {
        unchecked {
            count += 1;
        }
    }

    function readCounter() public view returns (uint256) {
        return count;
    }

    function countUp() public {
        for (int256 i = 0; i < 10000; i++) {
            increment();
        }
    }

    function countOnce() public {
        increment();
    }
}
