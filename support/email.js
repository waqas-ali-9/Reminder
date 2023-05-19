const nodemailer = require('nodemailer');
require('dotenv').config()

const mailid=process.env.EMAIL;
const mailpassword=process.env.PASSWORD;

const sendMail = (to, subject, text) => {
console.log(mailid)
console.log(mailpassword)
    return new Promise((resolve, reject) => {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: mailid,
                pass: mailpassword
            }
        });
        const mailOptions = {
            from: mailid,
            to: to,
            subject: subject,
            html: text
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) 
            {
                console.log(error);
                resolve({ status: false, error: error });
            } 
            else 
            {
                console.log('Email Sent: ' + info.response);
                resolve({ status: true, info: info });
            }
        });

    });

}

module.exports.sendMail = sendMail;
