import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'component-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() navmenu: any[] = [];

  // public menu: any[] = [
  //   {
  //     label: "Homepage",
  //     path: "/homepage"
  //   },
  //   {
  //     label: "About",
  //     path: "/about"
  //   },
  //   {
  //     label: "Contact",
  //     path: "/contact"
  //   },
  //   {
  //     label: "Books",
  //     path: "/books-c"
  //   },
  // ];
}
