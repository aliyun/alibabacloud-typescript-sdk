// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGwpBenchmarkSummaryResponseBodyDataItems } from "./GetGwpBenchmarkSummaryResponseBodyDataItems";


export class GetGwpBenchmarkSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Carbon Reduction Contribution Top4 Details.
   */
  items?: GetGwpBenchmarkSummaryResponseBodyDataItems[];
  /**
   * @remarks
   * Emission amount is presented with four decimal places. Normally, modeling doesn\\"t result in negative values, but users can represent carbon reductions as negatives. The amount, paired with the unit, defines the emissions. Both are dynamically adjusted. If emissions exceed `1000 kgCO₂e/productUnit`, they convert to `tCO₂e/productUnit`. If they fall below `1 kgCO₂e/productUnit`, they convert to `gCO₂e/productUnit`. Otherwise, they stay in `kgCO₂e/productUnit`.
   * 
   * @example
   * 1000.0000
   */
  quantity?: number;
  /**
   * @remarks
   * Unit of emissions. The default value is `kgCO₂e/productUnit.` `productUnit` is the unit selected for the product. The unit value is changed to `tCO₂e/productUnit` or `gCO₂e/productUnit`. For more information, see the remarks in the quantity column.
   * 
   * @example
   * kgCO₂e/t
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      quantity: 'quantity',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetGwpBenchmarkSummaryResponseBodyDataItems },
      quantity: 'number',
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

