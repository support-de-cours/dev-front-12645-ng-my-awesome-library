import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { IdCardComponent } from './components/id-card/id-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    IdCardComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public menu: any[] = [
    {
      label: "Homepage",
      path: "/homepage"
    },
    {
      label: "About",
      path: "/about"
    },
    {
      label: "Contact",
      path: "/contact"
    },
    {
      label: "Books",
      path: "/books-c"
    },
  ];

  public user_name: string = "John";

}
