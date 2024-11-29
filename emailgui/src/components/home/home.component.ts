import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private snack: MatSnackBar) { }

  buttonClick() {
    console.log("Button Click")
    this.snack.open("Hello, welcome to my first angular app.", "Cancel")
  }

  ngOnInit(): void {
  }

}
