if(process.env.NODE_ENV != 'production') require('dotenv').config();

module.exports = {
    APP_NAME: process.env.APP_NAME,
    PORT: process.env.PORT
}