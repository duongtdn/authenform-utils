"use strict"

module.exports = {

  get(url, done) {
    const request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.addEventListener('load', () => {
      done(request.status, request.responseText)
    })  
    request.send();
  },

  post(url, data, done) {
    const request = new XMLHttpRequest()
    request.open('POST', url, true)
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', () => {
      done(request.status, request.responseText)
    })  
    request.send(JSON.stringify(data));
  },

  put(url, data, done) {
    const request = new XMLHttpRequest()
    request.open('PUT', url, true)
    request.setRequestHeader('Content-Type', 'application/json');
    request.addEventListener('load', () => {
      done(request.status, request.responseText)
    })  
    request.send(JSON.stringify(data));
  }

}