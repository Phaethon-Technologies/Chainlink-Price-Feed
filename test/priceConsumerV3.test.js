const { expect } = require("chai");

describe("PriceTracker", function () {
  let priceTracker;

  beforeEach(async function () {
    const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
    const priceConsumerV3 = await PriceConsumerV3.deploy();
    await priceConsumerV3.deployed();

    const PriceTracker = await ethers.getContractFactory('PriceTracker');
    priceTracker = await PriceTracker.deploy(priceConsumerV3.address);
    await priceTracker.deployed();

  });


  it("reverts when calling getLatestPricedai with invalid aggregator address", async function () {
    const invalidAggregator = "0x0000000000000000000000000000000000000000";
    await expect(priceTracker.getLatestDaiPrice(invalidAggregator)).to.be.revertedWith("Invalid addresss");
  });


  it("reverts when calling getLatestPriceUsdc with invalid aggregator address", async function () {
    const invalidAggregator = "0x0000000000000000000000000000000000000000";
    await expect(priceTracker.getLatestUsdcPrice(invalidAggregator)).to.be.revertedWith("Invalid addresss");
  });

  it("returns the latest DAI price", async () => {
    const daiAggregator = "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19"; 
  
    const daiPrice = await priceTracker.getLatestDaiPrice(daiAggregator);
    expect(daiPrice.toNumber()).to.be.a("number");
  });


  it("returns the latest USDC price", async () => {
    const usdcAggregator = "0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E"; 
  
    const daiPrice = await priceTracker.getLatestUsdcPrice(usdcAggregator);
    expect(daiPrice.toNumber()).to.be.a("number");
  });

  
});
