/**
 * The block class for building the chain of blocks.
 * This class will help storing all the metadata needed
 * for each transaction.
 */
export default class Block {
  /**
   * Defining attributes for this class
   */
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  /**
   * To string method for debugging purposes
   */
  toString() {
    return `Block - 
        Timestamp: ${this.timestamp}
        Last Hash: ${this.lastHash.substring(0, 10)}
        Hash     : ${this.hash.substring(0, 10)}
        Data     : ${this.data}`;
  }
}
