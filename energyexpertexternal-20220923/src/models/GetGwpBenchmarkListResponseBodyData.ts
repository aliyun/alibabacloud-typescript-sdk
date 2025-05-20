// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGwpBenchmarkListResponseBodyDataItems } from "./GetGwpBenchmarkListResponseBodyDataItems";


export class GetGwpBenchmarkListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Active carbon reduction ranking list.
   */
  items?: GetGwpBenchmarkListResponseBodyDataItems[];
  /**
   * @remarks
   * unit of emissions. The default value is `kgCO₂e/productUnit`. 
   * The `productUnit` is the unit selected for the product. The unit value is changed to `tCO₂e/productUnit` or `gCO₂e/productUnit`. For more information, see the remarks in the quantity column.
   * 
   * @example
   * kgCO₂e/kg
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetGwpBenchmarkListResponseBodyDataItems },
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

