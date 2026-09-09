// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumBillsByDateResponseBodyDataItemBills extends $dara.Model {
  /**
   * @remarks
   * The cost.
   * 
   * @example
   * 1000
   */
  cost?: string;
  /**
   * @remarks
   * The currency. This is a fixed value.
   * 
   * @example
   * RMB
   */
  currency?: string;
  /**
   * @remarks
   * The name of the item. The value of this parameter depends on the `statsType` parameter in the request. If `statsType` is `PROJECT`, this parameter indicates the instance name. If `statsType` is `FEE_ITEM`, this parameter can be a value such as `DRStorage`, `ComputationSql`, or `Storage`.
   * 
   * @example
   * projectName
   */
  itemName?: string;
  /**
   * @remarks
   * The item\\"s cost as a percentage of the total daily cost. This value does not include a percent sign (%).
   * 
   * @example
   * 50
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

export class SumBillsByDateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total cost for the specified `dateTime`.
   * 
   * @example
   * 2000
   */
  cost?: string;
  /**
   * @remarks
   * The currency. This is a fixed value.
   * 
   * @example
   * RMB
   */
  currency?: string;
  /**
   * @remarks
   * The date of the statistics, in `yyyyMMdd` format.
   * 
   * @example
   * 20250719
   */
  dateTime?: string;
  /**
   * @remarks
   * A list of billable items.
   */
  itemBills?: SumBillsByDateResponseBodyDataItemBills[];
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      currency: 'currency',
      dateTime: 'dateTime',
      itemBills: 'itemBills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'string',
      currency: 'string',
      dateTime: 'string',
      itemBills: { 'type': 'array', 'itemType': SumBillsByDateResponseBodyDataItemBills },
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

export class SumBillsByDateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of results.
   */
  data?: SumBillsByDateResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': SumBillsByDateResponseBodyData },
      httpCode: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

