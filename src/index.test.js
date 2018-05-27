var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(starWars.all).to.satisfy(isArrayOfString);

      function isArrayOfString(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Luke Skywalker`', function() {
      expect(starWars.all).to.contain('Luke Skywalker');
    });
  });

  describe('random', function() {
    it('should return a item from the starWars.all', function() {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });
    it('should return an array of random items if passed a number', function() {
      var randomItems = starWars.random(5);
      expect(randomItems).to.have.length(5);
      randomItems.forEach(function(randomItem) {
        expect(starWars.all).to.include(randomItem);
      });
    });
  });
});


