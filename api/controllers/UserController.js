const User = require('../views/User.js')

class UserController {
  static read (_req, res) {
    const data = JSON.parse(User.read())
    res.send(data)
  }

  static write (req, res) {
    const data = req.body
    const items = User.write(data)
    res.send(items)
  }

  static delete (req, res) {
    const codifyUser = parseInt(req.params.codigoUser)
    const items = User.delete(codifyUser)
    res.send(items)
  }
}

module.exports = UserController
