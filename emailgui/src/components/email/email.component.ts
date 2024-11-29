import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../app/service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-email',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent implements OnInit {

  data = {
    to: "",
    subject: "",
    message: ""
  }

  flag = false;

  constructor(private email: EmailService, private snack: MatSnackBar, private http: HttpClient) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  doSubmitForm() {
    console.log("Try to submit form.");
    console.log("Data : ", this.data);

    if (this.data.to == '' || this.data.subject == '' || this.data.message == '') {
      this.snack.open("Fields can not be empty!!", "Ok", { duration: 3000 });

      return;
    }

    this.flag = true;
    this.email.sendEmail(this.data).subscribe(
      (response) => {
        console.log('Email sent successfully:', response);
        this.flag = false;

        // Show success notification
        this.snack.open("Send Success...", "Ok", { duration: 3000 });

        // Reset the email data
        this.data = {
          to: "",
          subject: "",
          message: ""
        };
      },
      (error) => {
        console.error('Error while sending email:', error);
        this.flag = false;

        // Show error notification
        this.snack.open("Error occured!!!", "Cancel", { duration: 3000 });
      }
    )
  }

}
