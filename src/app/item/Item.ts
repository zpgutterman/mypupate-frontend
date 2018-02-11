import { ItemDetail } from './ItemDetail';

export class Item {
  id: number;
  name: string;
  itemDetail: ItemDetail;

  constructor(id: number, name: string, itemDetail: ItemDetail){
      this.id = id;
      this.name = name;
      this.itemDetail = itemDetail;
    }

}
