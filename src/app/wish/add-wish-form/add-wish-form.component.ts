import { Component, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { WishItem } from "../../../shared/models/wishItem";

@Component({
  selector: "app-add-wish-form",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./add-wish-form.component.html",
  styleUrl: "./add-wish-form.component.css",
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  // ngModel | initialize value from the form
  newWishText = "";

  addNewWish() {
    // todo: add wish to items array
    this.addWish.emit(new WishItem(this.newWishText));

    // clear the textbox
    this.newWishText = "";
  }
}
