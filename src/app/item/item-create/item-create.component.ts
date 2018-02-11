import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "../item.service";
import {Item} from "../Item";
import {ItemDetail} from "../ItemDetail";
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css'],
  providers: [ItemService]
})
export class ItemCreateComponent implements OnInit, OnDestroy {

  id: number;
  item: Item;

  itemForm: FormGroup;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
  });
    this.itemForm = new FormGroup({
      name: new FormControl('', Validators.required),
      safe: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      amountUnit: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      reference: new FormControl('')
    });

    if (this.id) { //edit form
      this.itemService.findById(this.id).subscribe(
        item => {
            this.id = item.id;
            this.itemForm.patchValue({
            name: item.name,
            safe: item.itemDetail.safe,
            type: item.itemDetail.type,
            amount: item.itemDetail.amount,
            amountUnit: item.itemDetail.amountUnit,
            description: item.itemDetail.description,
            reference: item.itemDetail.reference,
          });
         },error => {
          console.log(error);
         }
      );

    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();

  }

  onSubmit() {
      if (this.itemForm.valid) {
        if (this.id) {
        let itemDetail : ItemDetail = new ItemDetail(null, this.itemForm.controls['type'].value, this.itemForm.controls['safe'].value, this.itemForm.controls['amount'].value, this.itemForm.controls['amountUnit'].value, this.itemForm.controls['description'].value, this.itemForm.controls['reference'].value, null, null, null)
        let item: Item = new Item(this.id, this.itemForm.controls['name'].value, itemDetail);
        console.log("updating item with id " + this.id);
        this.itemService.updateItem(item).subscribe();
      } else {
        let itemDetail : ItemDetail = new ItemDetail(null, this.itemForm.controls['type'].value, this.itemForm.controls['safe'].value, this.itemForm.controls['amount'].value, this.itemForm.controls['amountUnit'].value, this.itemForm.controls['description'].value, this.itemForm.controls['reference'].value, null, null, null)
        let item: Item = new Item(null, this.itemForm.controls['name'].value, itemDetail);
        console.log("saving new item " + item.name);

        this.itemService.saveItem(item).subscribe();
      }
    }
    this.itemForm.reset();
    this.router.navigate(['/item']);
  }

  redirectItemPage() {
    this.router.navigate(['/item']);
  }

}
