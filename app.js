//could not get this to work
//  https://jasonwatmore.com/post/2020/07/20/nodejs-send-emails-via-smtp-with-nodemailer


// create transporter object with smtp server details
const nodemailer = require("nodemailer");
const config = require("config.json");

const email = {
  from: "bill@circuitcase.com",
  to: "bill@circuitcase.com",
  subject: "butt",
  html: "message",
};

async function sendEmail({ from, to, subject, html }) {
  const transporter = nodemailer.createTransport(config.smtpOptions);
  await transporter.sendMail({ from, to, subject, html });
}

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "braeden57@ethereal.email",
    pass: "F9WWjnCpCckzVEKBSj",
  },
});

// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   auth: {
//     user: "[USERNAME]",
//     pass: "[PASSWORD]",
//   },
// });

// send email
// await transporter.sendMail({
//     from: 'from_address@example.com',
//     to: 'to_address@example.com',
//     subject: 'Test Email Subject',
//     text: 'Example Plain Text Message Body'
// });

module.exports = sendEmail;
