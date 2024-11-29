import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface EmailData {
  to: string,
  subject: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  sendEmail(data: EmailData) {

    // console.log(`Email sent to ${to} with subject "${subject}" and body "${message}".`);

    return this.http.post(`${this.baseUrl}/sendEmail`, data);

  }

}
