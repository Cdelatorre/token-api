const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const mongoose = require('mongoose');

const MongoStore = connectMongo(expressSession);

const session = expressSession({
  secret: 'super secret (change it)',
  saveUninitialized: false,
  resave: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 3600000,
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 3600,
  })
});

module.exports = session;
