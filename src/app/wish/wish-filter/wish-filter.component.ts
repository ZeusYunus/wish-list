import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { WishItem } from "../../../shared/models/wishItem";

// callback for our filter methods
const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: "app-wish-filter",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./wish-filter.component.html",
  styleUrl: "./wish-filter.component.css",
})
export class WishFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateFilter("0");
  }

  // ngModel | initialize value from the form
  listFilter: any = "0";

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
