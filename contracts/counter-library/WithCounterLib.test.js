const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WithCounterLib", function () {
  it("Should count to 10001", async function () {
    const WithCounterLib = await ethers.getContractFactory("WithCounterLib");
    const counter = await WithCounterLib.deploy();
    await counter.deployed();

    expect(await counter.readCounter()).to.equal(0);

    const countUpTx = await counter.countUp();
    await countUpTx.wait();
    const countOnceTx = await counter.countOnce();
    await countOnceTx.wait();
    expect(await counter.readCounter()).to.equal("10001");
  });
});
