import Blockchain from './blockchain';
import Block from './block';

describe('Blockchain', () => {
  let blockchain;

  beforeEach(() => {
    blockchain = new Blockchain();
  });

  it('Should start with genesis block', () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it('Adds a new block to our blockchain', () => {
    const data = 'foo';

    blockchain.addBlock(data);
    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data);
  });
});
