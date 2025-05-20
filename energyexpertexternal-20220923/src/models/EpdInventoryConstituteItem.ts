// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EpdInventoryConstituteItem extends $dara.Model {
  carbonEmission?: number;
  factor?: string;
  factorDataset?: string;
  factorId?: string;
  factorType?: number;
  factorUnit?: string;
  inventoryId?: number;
  inventoryUnit?: string;
  inventoryValue?: number;
  inventoryValuePerProduct?: number;
  inventoryValuePerProductUnit?: string;
  items?: EpdInventoryConstituteItem[];
  name?: string;
  num?: number;
  percent?: number;
  quantity?: number;
  resourceType?: string;
  state?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmission: 'carbonEmission',
      factor: 'factor',
      factorDataset: 'factorDataset',
      factorId: 'factorId',
      factorType: 'factorType',
      factorUnit: 'factorUnit',
      inventoryId: 'inventoryId',
      inventoryUnit: 'inventoryUnit',
      inventoryValue: 'inventoryValue',
      inventoryValuePerProduct: 'inventoryValuePerProduct',
      inventoryValuePerProductUnit: 'inventoryValuePerProductUnit',
      items: 'items',
      name: 'name',
      num: 'num',
      percent: 'percent',
      quantity: 'quantity',
      resourceType: 'resourceType',
      state: 'state',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmission: 'number',
      factor: 'string',
      factorDataset: 'string',
      factorId: 'string',
      factorType: 'number',
      factorUnit: 'string',
      inventoryId: 'number',
      inventoryUnit: 'string',
      inventoryValue: 'number',
      inventoryValuePerProduct: 'number',
      inventoryValuePerProductUnit: 'string',
      items: { 'type': 'array', 'itemType': EpdInventoryConstituteItem },
      name: 'string',
      num: 'number',
      percent: 'number',
      quantity: 'number',
      resourceType: 'string',
      state: 'number',
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

