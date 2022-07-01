//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract WithCounterLib {
    using Counters for Counters.Counter;
    Counters.Counter private count;

    function readCounter() public view returns (uint256) {
        return count.current();
    }

    function countUp() public {
        for (int256 i = 0; i < 10000; i++) {
            count.increment();
        }
    }

    function countOnce() public {
        count.increment();
    }
}
