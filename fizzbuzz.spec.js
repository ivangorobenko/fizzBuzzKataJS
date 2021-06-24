const chai = require('chai')

chai.should()

describe('Fizzbuzz ', () => {
    it('Un multiple de 3 retourne un Fizz', () => {
        fizzbuzz(3).should.be.equals('Fizz');
    });

    [5, 10].map(v => {
        it(`${v} (multiple de 5) retourne un Buzz`, () => {
            fizzbuzz(v).should.be.equals('Buzz');
        });
    });

});

const fizzbuzz = (value) => {
    if (value % 5 === 0) return 'Buzz';

    return 'Fizz';
};
