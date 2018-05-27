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
    it('should return a string', function() {
      var randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });
  });
});


