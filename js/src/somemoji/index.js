import 'babel-polyfill'
import Emoji from './Emoji'
import EmojiCollection from './EmojiCollection'
import EmojiDefinitions from './EmojiDefinitions.json'
import AppleSupportedCharacters from '../../../data/apple_supported_characters.json'
import NotoSupportedCharacters from '../../../data/noto_supported_characters.json'
import TwemojiSupportedCharacters from '../../../data/twemoji_supported_characters.json'

class Somemoji {
  // @return [Somemoji::EmojiCollection] an emoji collection including all emojis
  // @example
  //   Somemoji.emoji_collection.class #=> Somemoji::EmojiCollection
  //   Somemoji.emoji_collection.count #=> 1794
  //   Somemoji.emoji_collection.first.class #=> Somemoji::Emoji
  static get emojiCollection () {
    if (this.__emojiCollection === undefined) {
      this.__emojiCollection = new EmojiCollection(this.emojis)
    }
    return this.__emojiCollection
  }

  static get appleEmojiCollection () {
    if (this.__appleEmojiCollection === undefined) {
      let appleEmojis = AppleSupportedCharacters.map((character) => {
        return this.emojiCollection.findByCharacter(character)
      })
      this.__appleEmojiCollection = new EmojiCollection(appleEmojis)
    }
    return this.__appleEmojiCollection
  }

  static get emojiOneEmojiCollection () {
    return this.__emojiCollection
  }

  static get notoEmojiCollection () {
    if (this.__notoEmojiCollection === undefined) {
      let notoEmojis = NotoSupportedCharacters.map((character) => {
        return this.emojiCollection.findByCharacter(character)
      })
      this.__notoEmojiCollection = new EmojiCollection(notoEmojis)
    }
    return this.__notoEmojiCollection
  }

  static get twemojiEmojiCollection () {
    if (this.__twemojiEmojiCollection === undefined) {
      let twemojiEmojis = TwemojiSupportedCharacters.map((character) => {
        return this.emojiCollection.findByCharacter(character)
      })
      this.__twemojiEmojiCollection = new EmojiCollection(twemojiEmojis)
    }
    return this.__twemojiEmojiCollection
  }

  // @return [Array<Object>]
  static get emojiDefinitions () {
    return EmojiDefinitions
  }

  // @return [Array<Somemoji.Emoji>]
  static get emojis () {
    return Object.values(this.emojiDefinitions).map((def) => {
      let emoji = new Emoji(def)
      return emoji
    })
  }
}

export default Somemoji
export { EmojiCollection, Emoji }
