import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

import { Item } from '../Item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({transform: 'scale(1.6'}),
        animate('200ms ease-in', style({transform: 'scale(1.0)'}))
      ])

    ])
  ]
})
export class ItemDetailComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

  getSafe(): String {
    if (this.item == null) {
      return "null";
    } else {
      if (this.item.safe == 'Yes') {
        return "safe";
      } else if (this.item.safe == 'Maybe') {
        return "unclear";
      } else {
        return "unsafe";
      }
    }
  }

}
