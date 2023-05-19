const Router = require('express');
const router = Router();
const db = require('../database.js');
const email=require('../support/email.js');
const schedule = require('node-schedule')

//Triggers everyday at 6 am.
schedule.scheduleJob('0 0 6 * * ?', () => {
         sendReminder();
})

//this function will get all the reminders that will be sent.
async function sendReminder(){    
    let query=`call reminder.getmessage();`
    console.log(query)
    const result = await db.promise().query(query)
        .catch(err => {
            console.error(err);            
        });
    if (result) {        
        //get the reminders in an array and pass the whole array to
        //send every reminder in the array
        sendEmailToAll(result[0][0]) 
    }
}
//this functions sends the email to every reminder in the array passed
//into this function
function sendEmailToAll(data)
{
    data.forEach(element => {
        email.sendMail(element.email,element.subject,setMessage(element))
    });
}

//this function gets the text message and applied html tags on it for 
//formatting
function setMessage(element)
{
    var message='';
    message=`${element.text}
    <br>
    <br>
    <strong>Reminder By "Waqas"</strong>
    `
    return message;
}
module.exports = router;
