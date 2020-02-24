import SHA256 from 'crypto-js/sha256';

/**
 * The block class for building the chain of blocks.
 * This class will help storing all the metadata needed
 * for each transaction.
 */
export default class Block {
  /**
   * Defining attributes for this class
   * @param {String} timestamp The date the object was created
   * @param {String} lastHash The previous node hash
   * @param {String} hash The current object hash
   * @param {Array} data The input values for this transaction
   */
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  /**
   * To string method for debugging purposes
   * @returns {String} The class attributes as a string
   */
  toString() {
    return `Block - 
        Timestamp: ${this.timestamp}
        Last Hash: ${this.lastHash.substring(0, 10)}
        Hash     : ${this.hash.substring(0, 10)}
        Data     : ${this.data}`;
  }

  /**
   * Genesis method for creating our first block object
   * @returns {Object} The first object for the blockchain
   */
  static genesis() {
    return new this('Genesis time', '-------', 'f1r57-h45h', []);
  }

  /**
   * Mine block method for creating new blocks
   * @param {Object} lastBlock The previous created block object
   * @param {Array} data The input data for the transaction
   * @returns {Object} The block object that was created
   */
  static mineBlock(lastBlock, data) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = this.hash(timestamp, lastHash, data);

    return new this(timestamp, lastHash, hash, data);
  }

  /**
   * Hash method for making the hash value for the blocks
   * @param {String} timestamp The previous created block object
   * @param {String} lastHash The input data for the transaction
   * @param {Array} data The input data for the transaction
   * @returns {String} The block object that was created
   */
  static hash(timestamp, lastHash, data) {
    return SHA256(`${timestamp}${lastHash}${data}`).toString();
  }
}
