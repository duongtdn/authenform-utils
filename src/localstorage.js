"use strict"

const SESSION = 'SESSION'

module.exports = {
  get(key) {
    if (typeof(Storage) === "undefined") {
      // Sorry! No Web Storage support..
      throw new Error("No Web Storage support")
    }
    const session = JSON.parse(localStorage.getItem(SESSION))
    if (session) {
      return session[key]
    } else {
      return undefined
    }
  }
}