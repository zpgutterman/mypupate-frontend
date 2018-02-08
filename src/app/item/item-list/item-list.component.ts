import { Component, OnInit } from '@angular/core';
import { Item } from "../Item";
import { ItemService } from "../item.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ItemService]
})
export class ItemListComponent implements OnInit {
  private items: Item[];

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.itemService.findAll().subscribe(
      items => {
        this.items = items;
      },
      err => {
        console.log(err);
      }
    )
  }

  redirectNewItemPage() {
    this.router.navigate(['/item/create']);
  }

  editItemPage(item: Item) {
    if (item) {
      this.router.navigate(['/item/edit', item.id]);
    }
  }

  deleteItem(item: Item) {
    if (item) {
      this.itemService.deleteItemById(item.id).subscribe(
        res => {
          this.getAllItems();
          this.router.navigate(['/item']);
          console.log('done');
        }
      )
    }
    console.log('Delete Item');
  }

}
