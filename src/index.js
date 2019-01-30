"use strict"

const formCheck = require('./formcheck')
const xhttp = require('./xhttp')
const typecheck = require('./typecheck')
const storage = require('./localstorage')

module.exports = { ...formCheck, xhttp, storage, ...typecheck }