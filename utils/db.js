const { LocalStorage } = require('node-localstorage');

const db = new LocalStorage("./database");

module.exports = db;