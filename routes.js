const Router = require('express');

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const reminder = require('./routes/reminder.js');
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = Router()
    .use('/api/remindernotify',reminder)
    