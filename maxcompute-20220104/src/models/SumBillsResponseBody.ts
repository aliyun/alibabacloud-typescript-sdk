// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumBillsResponseBodyDataItemBills extends $dara.Model {
  /**
   * @example
   * 123.56
   */
  cost?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * projectName
   */
  itemName?: string;
  /**
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
   * @example
   * CNY
   */
  currency?: string;
  itemBills?: SumBillsResponseBodyDataItemBills[];
  /**
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
  data?: SumBillsResponseBodyData;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
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

