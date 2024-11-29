import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Indicates a standalone component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, NavbarComponent]
})
export class AppComponent {
  title = 'emailgui';
}
