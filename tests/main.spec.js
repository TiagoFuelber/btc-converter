const expect = require('chai').expect;

const exec = require('child_process').exec;
const btcConverter = './src/main.js';
const pkg = require('../package.json');

describe('Main CLI', () => {
  it('should return version of btc converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdOut, stdErr) => {
      if (err) throw err;
      expect(stdOut.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return the description when btc converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdOut, stdErr) => {
      if (err) throw err;
      expect(stdOut.includes('Convert Bitcoin to any currency defined')).to.be.true;
      done();
    });
  });

  it('should include currency option when btc-convert --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdOut, stdErr) => {
      if (err) throw err;
      expect(stdOut.includes('--currency')).to.be.true;
      done();
    });
  });

  it('should include amount option when btc-convert --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdOut, stdErr) => {
      if (err) throw err;
      expect(stdOut.includes('--amount')).to.be.true;
      done();
    });
  });
});
