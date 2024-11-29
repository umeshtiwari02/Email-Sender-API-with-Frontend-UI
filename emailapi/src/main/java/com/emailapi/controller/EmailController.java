package com.emailapi.controller;

import com.emailapi.model.EmailRequest;
import com.emailapi.model.EmailResponse;
import com.emailapi.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class EmailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/welcome")
    public String welcome() {
        return "Hello, this is my email controller";
    }

    // api to send email
    @PostMapping("/sendEmail")
     public ResponseEntity<?> sendEmail(@RequestBody EmailRequest emailRequest) {
        System.out.println(emailRequest);

        boolean result = this.emailService.emailSend(emailRequest.getSubject(), emailRequest.getMessage(), emailRequest.getTo());

        if (result) {
            return ResponseEntity.ok(new EmailResponse("Email is sent successfully!!!"));
        }
        else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new EmailResponse("Email not sent!"));
        }
     }
}
