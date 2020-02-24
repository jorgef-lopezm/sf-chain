import Block from './block';

/**
 * The blockchain class, all methods for manipulating our blockchain will
 * be created here
 */
export default class Blockchain {
  /**
   * Defining attributes for this class
   */
  constructor() {
    // Array of blocks, we provide our genesis block
    this.chain = [Block.genesis()];
  }

  /**
   * Method for adding new blocks to our chain
   * @param {Array} data Input data to for our new block
   * @returns {Object} The new block that was created
   */
  addBlock(data) {
    const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
    this.chain.push(block);

    return block;
  }

  /**
   * Method for validating incoming chains for users
   * @param {Array} chain The blockchain to validate
   * @returns {Boolean} The value if the chain is valid
   */
  static isValidChain(chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
      return false;

    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const lastBlock = chain[i - 1];

      if (
        block.lastHash !== lastBlock.hash ||
        block.hash !== Block.blockHash(block)
      )
        return false;
    }

    return true;
  }
}
