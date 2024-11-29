package com.emailapi.service;

import org.springframework.stereotype.Service;

import java.util.Properties;

import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    public boolean emailSend(String subject, String message, String to) {

        boolean flag = false;

		// sender email
        String from = "sender@gmail.com";

        // variable for email host
        String host = "smtp.gmail.com";

        // get the system properties
        Properties properties = System.getProperties();
        System.out.println("PROPERTIES : " + properties);

        // setting important information to properties object

        // host set
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth", "true");

        // Step 1: To get the session object
        Session session = Session.getInstance(properties, new Authenticator() {

            @Override
            protected PasswordAuthentication getPasswordAuthentication() {

				// provide a sender email and password(app password) -> generate a password and use that password here
                return new PasswordAuthentication("sender@gmail.com", "iado ipcl apme dwnb ");
            }

        });

        session.setDebug(true);

        // Step 2: Compose the message[text or multi-media]
        MimeMessage mimeMessage = new MimeMessage(session);

        try {
            // From email
            mimeMessage.setFrom(from);

            // Adding recipient to message
            mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // Adding subject to message
            mimeMessage.setSubject(subject);

            // Adding text to message
            mimeMessage.setText(message);

            // send
            // Step 3: Send the message using Transport class
            Transport.send(mimeMessage);

            System.out.println("Successfully sent...");

            flag = true;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return flag;

    }
}
