import escapeStringRegexp from 'escape-string-regexp'

export default class EmojiCollection {
  constructor (emojis = []) {
    this.emojis = emojis
    return this
  }

  addEmojiCollection (emojiCollection) {
    return new EmojiCollection(this.emojis.concat(emojiCollection.emojis))
  }

  forEach (fn) {
    this.emojis.forEach(fn)
  }

  filterByCategory (category) {
    let newEmojis = this.emojis.filter((emoji) => {
      return category === emoji.category
    })
    return new EmojiCollection(newEmojis)
  }

  filterByKeyword (keyword) {
    const newEmojis = this.emojis.filter((emoji) => {
      return emoji.keywords.some((emojiKeyword) => {
        return keyword === emojiKeyword
      })
    })
    return new EmojiCollection(newEmojis)
  }

  findByCharacter (character) {
    return this.indexByCharacter[character]
  }

  findByCode (code) {
    return this.indexByCode[code]
  }

  replaceCharacter (string, callback) {
    return string.replace(this.characterPattern, (match) => {
      return callback(this.findByCharacter(match))
    })
  }

  replaceCode (str, callback) {
    return str.replace(this.codePattern, (match, p1) => {
      return callback(this.findByCode(p1))
    })
  }

  searchByCode (pattern) {
    const newEmojis = this.emojis.filter((emoji) => {
      return pattern.test(emoji.code) || emoji.aliases.some((aliasCode) => {
        return pattern.test(aliasCode)
      })
    })
    return new EmojiCollection(newEmojis)
  }

  get characterPattern () {
    return new RegExp(this.characters.map(escapeStringRegexp).join('|'))
  }

  get characters () {
    return Object.keys(this.indexByCharacter)
  }

  get codePattern () {
    if (this.__codePattern === undefined) {
      this.__codePattern = new RegExp(':(' + this.code.map((code) => {
        return escapeStringRegexp(code)
      }).join('|') + '):', 'g')
    }
    return this.__codePattern
  }

  get code () {
    return Object.keys(this.indexByCode)
  }

  get indexByCharacter () {
    if (this.__indexByCharacter === undefined) {
      this.__indexByCharacter = this.emojis.reduce((obj, emoji) => {
        obj[emoji.character()] = emoji
        return obj
      }, {})
    }
    return this.__indexByCharacter
  }

  get indexByCode () {
    if (this.__indexByCode === undefined) {
      this.__indexByCode = this.emojis.reduce((obj, emoji) => {
        obj[emoji.code] = emoji
        emoji.aliases.forEach((aliasCode) => {
          obj[aliasCode] = emoji
        })
        return obj
      }, {})
    }
    return this.__indexByCode
  }
}
