// from https://www.youtube.com/watch?v=jsrtxnFpGaw

// Use at least Nodemailer v4.1.0
const nodemailer = require("nodemailer");

const recipient = "bill@circuitcase.com";

const host = "smtp.gmail.com";
const user = "bill@circuitcase.com";
const password = "GMgreen3451$#";

// const host = "smtp.ethereal.email";
// const user = "braeden57@ethereal.email";
// const password = "F9WWjnCpCckzVEKBSj";

const transporter = nodemailer.createTransport({
  host: `${host}`,
  port: 587,
  auth: {
    user: `${user}`,
    pass: `${password}`,
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
