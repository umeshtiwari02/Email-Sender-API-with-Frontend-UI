package com.emailapi.model;

public class EmailResponse {
    private String token;

    public EmailResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
