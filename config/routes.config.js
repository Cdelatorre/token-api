const express = require('express');
const users = require('../controllers/users.controller');
const secure = require('../middlewares/secure.mid')
const router = express.Router();

router.post('/users', users.create);
router.get('/users/:id', secure.isAuthenticated, users.get);
router.delete('/users/:id', secure.isAuthenticated, users.delete);
router.patch('/users/:id', secure.isAuthenticated, secure.isUser, users.update);

router.post('/login', users.login);
router.post('/logout', users.logout);

module.exports = router;
