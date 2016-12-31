import { assert } from 'chai'
import Somemoji, { EmojiCollection, Emoji } from '../../src/somemoji'

describe('Somemoji/EmojiCollection', () => {
  const emojiCollection = Somemoji.emojiCollection

  describe('.addEmojiCollection()', () => {
    const customEmojiCode = 'custonEmojiExample'
    const customEmoji = new Emoji({ code: customEmojiCode })
    const anotherEmojiCollection = new EmojiCollection([customEmoji])

    it('returns a compound Somemoji::EmojiCollection', () => {
      assert.equal(
        emojiCollection
          .addEmojiCollection(anotherEmojiCollection)
          .findByCode(customEmojiCode),
        customEmoji
      )
    })
  })

  describe('.filterByCategory()', () => {
    const emojiCollection = new EmojiCollection([
      new Emoji({ category: 'activity', code: 'activity-1' }),
      new Emoji({ category: 'activity', code: 'activity-2' }),
      new Emoji({ category: 'people', code: 'people-1' })
    ])

    it('returns a Somemoji::EmojiCollection filtered by a given category pattern', () => {
      assert.equal(
        emojiCollection.filterByCategory('activity').emojis.length,
        2
      )
    })
  })

  describe('.filterByKeyword()', () => {
    const emojiCollection = new EmojiCollection([
      new Emoji({ code: 'code1', keywords: ['keyword1', 'keyword2'] }),
      new Emoji({ code: 'code2', keywords: ['keyword1', 'keyword2'] }),
      new Emoji({ code: 'code3', keywords: ['keyword2', 'keyword3'] })
    ])

    it('returns a Somemoji::EmojiCollection filtered by a given keyword pattern', () => {
      assert.equal(
        emojiCollection.filterByKeyword('keyword1').emojis.length,
        2
      )
    })
  })

  describe('.findByCharacter()', () => {
    const character = String.fromCodePoint(parseInt('2934', 16), parseInt('FE0F', 16))

    context('with emoji character', () => {
      it('finds a Somemoji::Emoji instance from an emoji character (unicode grapheme cluster)', () => {
        assert.instanceOf(
          emojiCollection.findByCharacter(character),
          Emoji
        )
      })
    })
    context('with emoji character alternate', () => {
      const character = String.fromCodePoint(parseInt('2934', 16), parseInt('FE0F', 16))
      it('finds a Somemoji::Emoji instance from an emoji character alternate', () => {
        assert.instanceOf(
          emojiCollection.findByCharacter(character),
          Emoji
        )
      })
    })
  })

  describe('.findByCode()', () => {
    const code = 'thumbsup'
    context('with emoji code', () => {
      it('finds a Somemoji::Emoji instance from an emoji code', () => {
        assert.instanceOf(
          emojiCollection.findByCode(code),
          Emoji
        )
      })
    })

    context('with emoji code alias', () => {
      const code = '+1'
      it('finds a Somemoji::Emoji instance from an emoji code alias', () => {
        assert.instanceOf(
          emojiCollection.findByCode(code),
          Emoji
        )
      })
    })
  })

  describe('.replaceCharacter()', () => {
    it('replaces emoji characters in a given string with a given block', () => {
      assert.equal(
        emojiCollection.replaceCharacter('I \u2764\ufe0f Emoji', (emoji) => {
          return `<img alt="${emoji.character()}" class="emoji" src="/images/emoji/${emoji.basePath()}.png">` // eslint-disable-line quotes, max-len
        }),
        'I <img alt="\u{2764}\u{FE0F}" class="emoji" src="/images/emoji/unicode/2764-fe0f.png"> Emoji' // eslint-disable-line quotes, max-len
      )
    })
  })

  describe('.replaceCode()', () => {
    it('replaces :emoji_code: in a given string with a given block', () => {
      assert.equal(
        emojiCollection.replaceCode('I :heart: Emoji', (emoji) => {
          return `<img alt="${emoji.character()}" class="emoji" src="/images/emoji/${emoji.basePath()}.png">` // eslint-disable-line quotes, max-len
        }),
        'I <img alt="\u{2764}\u{FE0F}" class="emoji" src="/images/emoji/unicode/2764-fe0f.png"> Emoji'  // eslint-disable-line quotes, max-len
      )
    })
  })

  describe('.searchByCode()', () => {
    context('with pattern that matches with code', () => {
      const pattern = /^cus/

      it('searches emojis that match with given pattern', () => {
        assert.sameMembers(
          emojiCollection.searchByCode(pattern).emojis.map((emoji) => { return emoji.code }),
          ['custard', 'customs']
        )
      })
    })

    context('with pattern that matches with alias', () => {
      const pattern = /^\+/

      it('searches emojis that match with given pattern', () => {
        assert.sameMembers(
          emojiCollection.searchByCode(pattern).emojis.map((emoji) => { return emoji.code }),
          [
            'thumbsup',
            'thumbsup_tone1',
            'thumbsup_tone2',
            'thumbsup_tone3',
            'thumbsup_tone4',
            'thumbsup_tone5'
          ]
        )
      })
    })
  })
})
