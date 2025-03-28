import { Component, Input } from "@angular/core";
import { WishItem } from "../../../shared/models/wishItem";
import { WishListItemComponent } from "../wish-list-item/wish-list-item.component";

@Component({
  selector: "app-wish-list",
  standalone: true,
  imports: [WishListItemComponent],
  templateUrl: "./wish-list.component.html",
  styleUrl: "./wish-list.component.css",
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];
  wish: any;
}
