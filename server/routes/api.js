import express from 'express';
import { transporter, mailOptions } from "../libs/nodemailer.js";

const router = express.Router();

router.post("/api", (req, res) => {
    const { name, email, message } = req.body;
    console.log(req.body);

    try {
        transporter.sendMail({
            ...mailOptions,
            subject: "Message from portfolio",
            text: `
                > Name: ${name}
                > Email: ${email}
                > ${message}
            `
        });
    } catch (err) {
        console.log(err);
    }
});

export { router };