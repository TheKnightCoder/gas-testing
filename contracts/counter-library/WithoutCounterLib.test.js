const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WithoutCounterLib", function () {
  it("Should count to 10001", async function () {
    const WithoutCounterLib = await ethers.getContractFactory("WithoutCounterLib");
    const counter = await WithoutCounterLib.deploy();
    await counter.deployed();

    expect(await counter.readCounter()).to.equal(0);


    const countUpTx = await counter.countUp();
    await countUpTx.wait();
    const countOnceTx = await counter.countOnce();
    await countOnceTx.wait();

    expect(await counter.readCounter()).to.equal("10001");
  });
});
