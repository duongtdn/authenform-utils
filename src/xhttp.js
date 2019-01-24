"use strict"

const { isFunction, isObject } = require('./typecheck')
const storage = require('./localstorage')

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

  put(url, data, options, done) {
    if (isFunction(options)) {
      done = options
    }
    const request = new XMLHttpRequest()
    request.open('PUT', url, true)
    request.setRequestHeader('Content-Type', 'application/json');
    if (isObject(options) && options.authen && storage.get('token')) {
      request.setRequestHeader('Authorization', `Bearer ${storage.get('token')}`);
    }
    request.addEventListener('load', () => {
      done(request.status, request.responseText)
    })  
    request.send(JSON.stringify(data));
  }

}