// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGwpInventorySummaryResponseBodyDataItems } from "./GetGwpInventorySummaryResponseBodyDataItems";


export class GetGwpInventorySummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Top 4 types of carbon footprint contribution.
   */
  items?: GetGwpInventorySummaryResponseBodyDataItems[];
  /**
   * @remarks
   * The emission quantity.
   * 
   * @example
   * 1.0100
   */
  quantity?: number;
  /**
   * @remarks
   * The time when the result was generated, in the millisecond timestamp format.
   * 
   * @example
   * 1709108026000
   */
  resultGenerateTime?: number;
  /**
   * @remarks
   * Emission Unit.
   * 
   * @example
   * tCO₂e/Piece(s)
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      quantity: 'quantity',
      resultGenerateTime: 'resultGenerateTime',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetGwpInventorySummaryResponseBodyDataItems },
      quantity: 'number',
      resultGenerateTime: 'number',
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

