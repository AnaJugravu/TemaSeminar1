function runLengthEncoding(input, isCompression = true) {
    if (typeof input !== 'string' || typeof isCompression !== 'boolean') {
      throw new Error('InvalidType');
    }
  
    if (isCompression) {
      let compressedResult = '';
      let count = 1;
  
      for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
          count++;
        } else {
          compressedResult += input[i] + count;
          count = 1;
        }
      }
  
      return compressedResult;
    } else {
      let decompressedResult = '';
  
      for (let i = 0; i < input.length; i += 2) {
        const char = input[i];
        const repeatCount = parseInt(input[i + 1], 10);
  
        decompressedResult += char.repeat(repeatCount);
      }
  
      return decompressedResult;
    }
  }
  
  module.exports = runLengthEncoding;
  