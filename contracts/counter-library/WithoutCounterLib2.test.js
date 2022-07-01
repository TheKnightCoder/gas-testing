const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WithoutCounterLib2", function () {
  it("Should count to 10001", async function () {
    const WithoutCounterLib2 = await ethers.getContractFactory("WithoutCounterLib2");
    const counter = await WithoutCounterLib2.deploy();
    await counter.deployed();

    expect(await counter.readCounter()).to.equal(0);

    const countUpTx = await counter.countUp();
    await countUpTx.wait();
    const countOnceTx = await counter.countOnce();
    await countOnceTx.wait();

    expect(await counter.readCounter()).to.equal("10001");
  });
});
