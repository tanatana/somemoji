export default class Emoji {
  constructor ({
    aliases = null,
    ascii_arts = null, // eslint-disable-line camelcase
    category = null,
    code = '',
    code_points = null, // eslint-disable-line camelcase
    keywords = null,
    name = null
  }) {
    this.aliases = aliases || []
    this.asciiArts = ascii_arts || [] // eslint-disable-line camelcase
    this.category = category
    this.code = code
    this.codePoints = code_points || [] // eslint-disable-line camelcase
    this.keywords = keywords || []
    this.name = name
  }

  // @return [Array<String>]
  abbreviatedCodePoints () {
    return this.codePoints.map((codePoint) => {
      return !('200D' <= codePoint && codePoint <= 'FE0F')
    })
  }
  // @return [String]
  basePath () {
    if (this.codePoints.length === 0) {
      return this.code
    } else {
      return `unicode/${this.codePoints.join('-')}`
    }
  }

  // @return [String, null] a String representation from its code points
  character () {
    if (this.codePoints.length !== 0) {
      return this.codePoints.map((codePoint) => {
        return String.fromCodePoint(parseInt(codePoint, 16))
      }).join()
    }
    return null
  }

  // @return [Hash{Symbol => Object}]
  toObject () {
    return {
      aliases: this.aliases,
      asciiArts: this.asciiArts,
      category: this.category,
      code: this.code,
      codePoints: this.codePoints,
      keywords: this.keywords,
      name: this.name
    }
  }
}
