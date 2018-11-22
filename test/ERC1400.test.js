import shouldFail from 'openzeppelin-solidity/test/helpers/shouldFail.js';

const ERC1400 = artifacts.require('ERC1400');

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
const ZERO_BYTE = '0x';

const initialSupply = 1000000000;

contract('ERC1400', function ([owner, operator, defaultOperator, investor, recipient, unknown]) {
  describe('ERC1400 functionalities', function () {
    beforeEach(async function () {
      this.token = await ERC1400.new('ERC1400', 'DAU', 1, [defaultOperator]);
    });
    /*
    describe('name', function () {
      it('returns the name of the token', async function () {
        const name = await this.token.name();

        console.log(name);

        //assert.equal(name, 'ERC777ReservableToken');
      });
    });

    describe('symbol', function () {
      it('returns the symbol of the token', async function () {
        const symbol = await this.token.symbol();

        assert.equal(symbol, 'DAU');
      });
    });

    // GLE: Remove the default operator
    describe('_removeDefaultOperator', function () {
      it('removes the default operator', async function () {
        _removeDefaultOperator(defaultOperator);
      });
    });
      */
  });
});
