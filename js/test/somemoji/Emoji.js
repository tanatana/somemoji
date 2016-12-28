var assert = require('chai').assert;

var Emoji = require('../../dist/somemoji.js').Emoji

describe('Somemoji/Emoji', function() {
  var emoji = new Emoji({
    aliases: [],
    ascii_arts: [],
    category: "symbols",
    code: "100",
    code_points: [
      "1F4AF"
    ],
    keywords: [
      "100",
      "a",
      "exam",
      "numbers",
      "parties",
      "percent",
      "perfect",
      "plus",
      "quiz",
      "school",
      "score",
      "symbol",
      "test",
      "win",
      "wow"
    ],
    name: "hundred points symbol"
  })

  describe('.character()', function() {
    it('returns a main character representation', function() {
      assert.equal(
        emoji.character(),
        String.fromCodePoint(parseInt("1f4af", 16))
      );
    });
  });

  describe('.toObject()', function() {
    it('returns a Object', function() {
      assert.typeOf(
        emoji.toObject(),
        "object"
      );
    });
  });
});
