export class Item {
  id: number;
  name: string;
  type: string;
  safe: string;
  amount: number;
  amountUnit: string;
  description: string;
  reference: string;
  hits: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: number, name: string, type: string, safe: string, amount: number,
    amountUnit: string, description: string, reference: string, hits: number,
    createdAt: Date, updatedAt: Date){
      this.id = id;
      this.name = name;
      this.type = type;
      this.safe = safe;
      this.amount = amount;
      this.amountUnit = amountUnit;
      this.description = description;
      this.reference = reference;
      this.hits = hits;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }

}
