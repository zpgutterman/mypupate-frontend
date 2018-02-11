export class ItemDetail {
  id: number;
  type: string;
  safe: string;
  amount: number;
  amountUnit: string;
  description: string;
  reference: string;
  hits: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: number, type: string, safe: string, amount: number,
    amountUnit: string, description: string, reference: string, hits: number,
    createdAt: Date, updatedAt: Date){
      this.id = id;
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
