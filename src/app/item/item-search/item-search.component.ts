import { Component, OnInit } from '@angular/core';
import { Item } from "../Item";
import { ItemService } from "../item.service";
import { Router } from '@angular/router';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css'],
  providers: [ItemService],
  animations: [
    trigger('leftSlide', [
      transition(':enter', [
        style({transform: 'translateY(-500px)', opacity: 0}),
        animate('1500ms ease-in-out', style({transform: 'translateY(0px)', opacity: 1}))
      ])

    ])
  ]
})
export class ItemSearchComponent implements OnInit {
  private items: Item[];

  selectedSafe: boolean;

  term: String;

  selectedItem: Item;

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.itemService.findAllByName().subscribe(
      items => {
        this.items = items;
      },
      err => {
        console.log(err);
      }
    )
  }

  onSearchChange(): void {
    console.log("search change");
    if (this.selectedItem != null) {
      this.selectedItem = null;
    }
  }

  getSafe(): String {
    if (this.selectedItem == null) {
      return "container";
    } else {
      if (this.selectedItem.itemDetail.safe == 'Yes') {
        return "containersafe";
      } else {
        return "containerunsafe";
      }
    }
  }

  showResults(): boolean {

    if (this.term == '' || this.term == null) {
      return false;
    }
    else if (this.selectedItem != null){
      return false;
    }
    else {
      return true;
    }
  }

  searchAmount(): number {
    if (this.selectedItem == null) {
      8;
    } else {
      return 3;
    }
  }

  clearSearch(): void {
    this.term = '';
    this.selectedItem = null;
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    this.term = this.selectedItem.name.toLowerCase();
    if (item.itemDetail.safe == 'Yes') {
      console.log('safe');
    } else {
      console.log('not safe');
    }
  }

}
