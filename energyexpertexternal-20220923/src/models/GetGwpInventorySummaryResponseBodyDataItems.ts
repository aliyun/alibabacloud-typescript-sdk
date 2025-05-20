// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGwpInventorySummaryResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * Inventory resource type name.
   * 
   * @example
   * Energy
   */
  name?: string;
  /**
   * @remarks
   * Percentage.
   * 
   * @example
   * 99.01
   */
  percent?: string;
  /**
   * @remarks
   * Quantity.
   * 
   * @example
   * 9.9763
   */
  quantity?: number;
  /**
   * @remarks
   * The unit.
   * 
   * @example
   * kgCO₂e/Piece(s)
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

