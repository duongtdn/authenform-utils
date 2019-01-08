"use strict"

module.exports = {

  get(url, done) {
    const request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.addEventListener('load', () => {
      done(request.status, request.responseText)
    })  
    request.send();
  }

}