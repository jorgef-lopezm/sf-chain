import Block from './block';

describe('Block', () => {
  let data;
  let lastBlock;
  let block;

  beforeEach(() => {
    data = 'bar';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });

  it('Sets the data to match the input', () => {
    expect(block.data).toEqual(data);
  });
  it('Sets the lastHash to match the hash of the last block', () => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  });
});
