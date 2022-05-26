var assert = require("assert");
var Calculate = require('../index.js');

describe('Calculate', () => {
    describe('.factorial', () => {
        it('runs', () => {
            assert.ok(true);
        });

        it('it will test if the output of 5! is equal to 120', () => {
            const inputNumber = 5;
            const expected = 120

            const result = Calculate.factorial(inputNumber);

            assert.equal(result, expected);
        });

        it('it will test if the output of 3! is equal to 6', () => {
            const inputNumber = 3;
            const expected = 6;

            const result = Calculate.factorial(inputNumber);

            assert.equal(result, expected);
        });

        it('returns 1 when you pass in 0', () => {
            const inputNumber = 0;
            const expected = 1;

            const result = Calculate.factorial(inputNumber);

            assert.equal(result, expected);
        });
    });
});