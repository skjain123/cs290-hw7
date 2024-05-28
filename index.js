'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.static("public"));

let html_header = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="main.css">
        <title>Sunil Jain</title>
    </head>
    <body>
        <header>
            <h1 class="main_header">Sunil Jain</h1>

            <nav>
                <a href="./index.html" target="_blank">Index</a>
                <a href="./contact.html" target="_blank">Contact</a>
                <a href="./interests.html" target="_blank">Interests</a>
                <a href="./style.html" target="_blank">Style</a>
            </nav>

        </header>
`

let html_footer = 
`
        <footer>
            <p class="tm">
                &copy; Created by Sunil Jain for CS290 at Oregon State University at 5/28/24.
            </p>
        </footer>

    </body>
</html>

`

app.post("/contact.html", (req, res) => {
  let req_body = req.body;
  console.log("request recieved at /contact.html");
  console.log("testing: " + JSON.stringify(req_body, null, 2));

  const { contact_name, contact_email, contact_message, position, contact_time } = req_body;

  let html_body = 
  `
  <h2>Thank you, ${contact_name}, for your submission!</h2>
  <p>
    We have received your message: 
    "${contact_message}".
  </p>

  <p>
  Thank you for applying for the ${position} position at jainsu.co. We appreciate your interest!
  </p>

  <p>
  We will reach out to you via email at ${contact_email} during the ${contact_time}. 
  </p>

  `

  res.send(html_header + "\n" + html_body + "\n" + html_footer + "\n");

});

app.listen(PORT);

