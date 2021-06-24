const chai = require('chai')

chai.should()

describe('Fizzbuzz ', () => {
    it('Un multiple de 3 retourne un Fizz', () => {
        fizzbuzz(3).should.be.equals('Fizz');
    });
});

const fizzbuzz = () => "Fizz";
