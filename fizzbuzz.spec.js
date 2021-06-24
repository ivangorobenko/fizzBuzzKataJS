const chai = require('chai')

chai.should()

describe('Fizzbuzz ', () => {
    [3, 6].map(v => {
        it(`${v} (multiple de 3) retourne un Fizz`, () => {
            fizzbuzz(v).should.be.equals('Fizz');
        });
    });

    [5, 10].map(v => {
        it(`${v} (multiple de 5) retourne un Buzz`, () => {
            fizzbuzz(v).should.be.equals('Buzz');
        });
    });

    [15, 30].map(v => {
        it(`${v} (multiple de 5 et de 3) retourne FizzBuzz`, () => {
            fizzbuzz(v).should.be.equals('FizzBuzz');
        });
    });
    
    it('tous les autres cas renvoie la même valeur en string', () => {
        fizzbuzz(1).should.be.equals('1');
    });

    it('0 renvoie la même valeur en string', () => {
        fizzbuzz(0).should.be.equals('0');
    })
});

const fizzbuzz = (value) => {
    if(value === 0) return value.toString();
    if (value % 15 === 0) return 'FizzBuzz';
    if (value % 3 === 0) return 'Fizz';
    if (value % 5 === 0) return 'Buzz';
    return value.toString();
};
