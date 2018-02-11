import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemSearchComponent } from './item-search/item-search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemDetail } from './ItemDetail';


@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    ItemRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ItemListComponent, ItemCreateComponent, ItemSearchComponent, ItemDetailComponent]
})
export class ItemModule { }
