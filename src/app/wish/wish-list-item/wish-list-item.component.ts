import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WishItem } from "../../../shared/models/wishItem";
import { EventService } from "../../../shared/services/EventService";

@Component({
  selector: "app-wish-list-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./wish-list-item.component.html",
  styleUrl: "./wish-list-item.component.css",
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  // Adds a class to the dom element
  get cssClasses() {
    return this.wish.isComplete ? ["strikeout", "text-muted"] : [];
  }

  constructor(private events: EventService) {}

  removeWish() {
    this.events.emit("removeWish", this.wish);
  }

  // Toggles the items from checked to unchecked
  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
