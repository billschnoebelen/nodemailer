
// from https://www.youtube.com/watch?v=jsrtxnFpGaw


// Use at least Nodemailer v4.1.0
const nodemailer = require("nodemailer");

const recipient = "bill@circuitcase.com";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "braeden57@ethereal.email",
    pass: "F9WWjnCpCckzVEKBSj",
  },
});

// Message object
const message = {
  from: "Sender Name <sender@example.com>",
  to: `Recipient <${recipient}>`,
  subject: "Nodemailer is unicode friendly ✔",
  text: "Hello to myself!",
  html: "<p><b>Hello</b> to myself!</p>",
};

transporter.sendMail(message, (err, info) => {
  if (err) {
    console.log("Error occurred. " + err.message);
    return process.exit(1); //crashes whole application if it fails
  }

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

// async function sendEmail({ from, to, subject, html }) {
//     const transporter = nodemailer.createTransport(config.smtpOptions);
//     await transporter.sendMail({ from, to, subject, html });
//   }
