const chai = require('chai');
const expect = chai.expect;

const {createCard} = require('../src/card')
const {initiateDeck} = require('../src/game');

describe('Game Start', function() {
  it('should create a deck', function() {
    card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"],"array")
    card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

    const deck = initiateDeck([card1, card2, card3]);

    expect(deck).to.deep.equal([card1, card2, card3]);
  })
})