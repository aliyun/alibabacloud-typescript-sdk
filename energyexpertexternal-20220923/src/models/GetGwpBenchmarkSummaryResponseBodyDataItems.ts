// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGwpBenchmarkSummaryResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * Name of carbon reduction details.
   * 
   * @example
   * Energy-Replacement
   */
  name?: string;
  /**
   * @remarks
   * Percentage of emissions. The value is of the string type. Two decimal places are reserved for numbers. For example, "99.01" indicates the 99.01% of this type of emissions to the total emissions. Note that the returned string itself does not contain a percent sign.
   * 
   * @example
   * 99.01
   */
  percent?: string;
  /**
   * @remarks
   * Emission amount is presented with four decimal places. Normally, modeling doesn\\"t result in negative values, but users can represent carbon reductions as negatives. The amount, paired with the unit, defines the emissions. Both are dynamically adjusted. If emissions exceed `1000 kgCO₂e/productUnit`, they convert to `tCO₂e/productUnit`. If they fall below `1 kgCO₂e/productUnit`, they convert to `gCO₂e/productUnit`. Otherwise, they stay in `kgCO₂e/productUnit`.
   * 
   * @example
   * 9.9763
   */
  quantity?: number;
  /**
   * @remarks
   * Unit of emissions. The default value is `kgCO₂e/productUnit.` `productUnit` is the unit selected for the product. The unit value is changed to `tCO₂e/productUnit` or `gCO₂e/productUnit`. For more information, see the remarks in the quantity column.
   * 
   * @example
   * kgCO₂e/kg
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      percent: 'percent',
      quantity: 'quantity',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      percent: 'string',
      quantity: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

