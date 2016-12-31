import { assert } from 'chai'
import Somemoji, { EmojiCollection } from '../../src/somemoji'

describe('Somemoji', () => {
  describe('.emojiCollection', () => {
    it('returns a EmojiCollection', () => {
      assert.instanceOf(
        Somemoji.emojiCollection,
        EmojiCollection
      )
    })
  })

  describe('.appleEmojiCollection', () => {
    it('returns a EmojiCollection', () => {
      assert.instanceOf(
        Somemoji.appleEmojiCollection,
        EmojiCollection
      )
    })
  })

  describe('.emojiOneEmojiCollection', () => {
    it('returns a EmojiCollection', () => {
      assert.instanceOf(
        Somemoji.emojiOneEmojiCollection,
        EmojiCollection
      )
    })
  })

  describe('.notoEmojiCollection', () => {
    it('returns a EmojiCollection', () => {
      assert.instanceOf(
        Somemoji.notoEmojiCollection,
        EmojiCollection
      )
    })
  })

  describe('.twemojiCollection', () => {
    it('returns a EmojiCollection', () => {
      assert.instanceOf(
        Somemoji.twemojiEmojiCollection,
        EmojiCollection
      )
    })
  })
})
