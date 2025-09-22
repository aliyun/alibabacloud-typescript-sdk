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

export class GetGwpInventorySummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  data?: GetGwpInventorySummaryResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGwpInventorySummaryResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

