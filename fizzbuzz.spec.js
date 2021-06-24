const { expect } = require('chai');
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

const FIZZ_BUZZ = 'FizzBuzz';
const FIZZ = 'Fizz';
const BUZZ = 'Buzz';

const onMultipleOf = (multiple, expectedValue) =>  (value) => {
    if(value % multiple === 0) return expectedValue;
};
const forOthersReturnSameValue = () => (value) => value.toString();

const onZeroReturnSameValue = () => (value) => value === 0 ? value.toString() : undefined;

const rules = [
    onZeroReturnSameValue(),
    onMultipleOf(15, FIZZ_BUZZ),
    onMultipleOf(3, FIZZ),
    onMultipleOf(5, BUZZ),
    forOthersReturnSameValue(),
];

const fizzbuzz = (value) => {
    return rules
            .map(rule => rule(value))
            .find(result => result !== undefined);
};

