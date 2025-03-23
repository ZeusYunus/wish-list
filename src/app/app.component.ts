// Items array will normally be pulled from a web server

import { Component } from "@angular/core";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ContactComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
