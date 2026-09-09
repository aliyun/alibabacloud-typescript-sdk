// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumBillsResponseBodyDataItemBills extends $dara.Model {
  /**
   * @remarks
   * The cost.
   * 
   * @example
   * 123.56
   */
  cost?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The item name. When the request\\"s `statsType` is `PROJECT`, this is the instance name. When `statsType` is `FEE_ITEM`, this is the billable item type (for example, `DRStorage`, `ComputationSql`, or `Storage`).
   * 
   * @example
   * projectName
   */
  itemName?: string;
  /**
   * @remarks
   * The percentage of the total cost that this item represents. The value does not include a percent sign (%).
   * 
   * @example
   * 56.12
   */
  percentage?: number;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      currency: 'currency',
      itemName: 'itemName',
      percentage: 'percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'string',
      currency: 'string',
      itemName: 'string',
      percentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SumBillsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The currency used for all cost values.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * A list of billable items.
   */
  itemBills?: SumBillsResponseBodyDataItemBills[];
  /**
   * @remarks
   * The total cost of all returned billable items.
   * 
   * @example
   * 123.56
   */
  totalCost?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'currency',
      itemBills: 'itemBills',
      totalCost: 'totalCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      itemBills: { 'type': 'array', 'itemType': SumBillsResponseBodyDataItemBills },
      totalCost: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemBills)) {
      $dara.Model.validateArray(this.itemBills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SumBillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: SumBillsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BB66A390-4EF7-557E-9489-7F98D6F44002
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SumBillsResponseBodyData,
      httpCode: 'number',
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

