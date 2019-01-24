"use strict"

const formCheck = require('./src/formcheck')
const xhttp = require('./src/xhttp')
const typecheck = require('./src/typecheck')
const storage = require('./src/localstorage')

module.exports = { ...formCheck, xhttp, storage, ...typecheck }