export default class Emoji {
  constructor ({
    aliases = null,
    ascii_arts = null,
    category = null,
    code,
    code_points = null,
    keywords = null,
    name = null
  }) {
    this.aliases = aliases || [],
    this.asciiArts = ascii_arts || [],
    this.category = category,
    this.code = code,
    this.codePoints = code_points || [],
    this.keywords = keywords || []
    this.name = name
  }

  // @return [Array<String>]
  abbreviatedCodePoints () {
    return this.codePoints.map((codePoint) => {
      return !("200D" <= codePoint && codePoint <= "FE0F")
    })
  }
  // @return [String]
  basePath () {
    if ( this.codePoints.length === 0 ) {
      return code
    } else {
      return `unicode/${this.codePoints.join('-')}`
    }
  }

  // @return [String, null] a String representation from its code points
  character () {
    if ( this.codePoints.length !== 0 ) {
      return this.codePoints.map((codePoint) => {
        return String.fromCodePoint( parseInt(codePoint, 16) )
      }).join()
    }
    return null
  }

  // @return [Hash{Symbol => Object}]
  toObject () {
    return {
      aliases: this.aliases,
      ascii_arts: this.asciiArts,
      category: this.category,
      code: this.code,
      code_points: this.codePoints,
      keywords: this.keywords,
      name: this.name
    }
  }
}
