# PriceConsumerV3 and PriceTracker Contracts

These contracts provide a simple and efficient way to retrieve the latest prices of DAI and USDC tokens from Chainlink price feeds in Solidity smart contracts.

## Contracts

PriceConsumerV3.sol: This contract uses the Chainlink AggregatorV3Interface to retrieve the latest prices of DAI and USDC tokens from Chainlink price feeds.

PriceTracker.sol: This contract uses the PriceConsumerV3 contract to retrieve the latest prices of DAI and USDC tokens, eliminating the need to hit the Chainlink price feeds again.

For more details vist : https://www.notion.so/phaethontech/Chainlink-Price-Feed-Doc-b2137bd897244819b44f934a74428386?pvs=4
