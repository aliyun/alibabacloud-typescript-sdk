// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInventoryListResponseBodyDataItems } from "./GetInventoryListResponseBodyDataItems";


export class GetInventoryListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Inventory detail.
   */
  items?: GetInventoryListResponseBodyDataItems[];
  /**
   * @remarks
   * Unit of product.
   * 
   * @example
   * kg
   */
  productUnit?: string;
  /**
   * @remarks
   * Emission Unit: The default value is kgCO₂ /productUnit. productUnit is the unit selected for the product. The unit value is changed to tCO₂ e/productUnit or gCO₂ e/productUnit based on the emission quantity. For more information, see the quantity column.
   * 
   * @example
   * kgCO₂e/kg
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      productUnit: 'productUnit',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetInventoryListResponseBodyDataItems },
      productUnit: 'string',
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

