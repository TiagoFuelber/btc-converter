const expect = require('chai').expect;

const exec = require('child_process').exec;
const btcConverter = 'node.exe ./src/main.js';

describe('Main CLI', () => {
  it('should return hello word', (done) => {
    exec(btcConverter, (err, stdOut, stdErr) => {
      if (err) throw err;
      expect(stdOut.replace('\n', '')).to.be.equal('hello world');
      done();
    });
  });
});
