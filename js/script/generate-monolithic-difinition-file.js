const fs = require('fs')
const path = require('path')

const definitionDir = path.resolve(__dirname, "../../data/emoji_definitions");
const def = {}
fs.readdirSync(definitionDir).forEach((file) => {
  let p = path.parse(file)
  def[p.name] = require(definitionDir + '/' + file)
})

fs.writeFileSync(path.resolve(__dirname, '../src/somemoji/EmojiDefinitions.json'),
  JSON.stringify(def),
  {'encoding': 'utf8', 'flag': 'w+'}
)
