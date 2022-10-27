const fs = require('fs')

class User {
  static read () {
    const data = fs.readFileSync('db.txt')
    return data
  }

  static write (data) {
    const items = JSON.parse(fs.readFileSync('db.txt'))
    items.item.push(data)
    fs.writeFileSync('db.txt', JSON.stringify(items))
    return items
  }

  static delete (id) {
    const items = JSON.parse(fs.readFileSync('db.txt'))
    items.item = items.item.filter(i => i.codigoItem !== id)
    fs.writeFileSync('db.txt', JSON.stringify(items))
    return items
  }
}

module.exports = User
