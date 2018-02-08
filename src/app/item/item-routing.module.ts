import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemSearchComponent } from './item-search/item-search.component';



const routes: Routes = [
  {path: 'item', component: ItemListComponent},
    {path: 'item/create', component: ItemCreateComponent},
    {path: 'item/edit/:id', component: ItemCreateComponent},
    {path: 'item/search', component: ItemSearchComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
