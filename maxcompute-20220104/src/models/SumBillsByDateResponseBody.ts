// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumBillsByDateResponseBodyDataItemBills extends $dara.Model {
  /**
   * @example
   * 1000
   */
  cost?: string;
  /**
   * @example
   * RMB
   */
  currency?: string;
  /**
   * @example
   * projectName
   */
  itemName?: string;
  /**
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
   * @example
   * 2000
   */
  cost?: string;
  /**
   * @example
   * RMB
   */
  currency?: string;
  /**
   * @example
   * 20250719
   */
  dateTime?: string;
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
  data?: SumBillsByDateResponseBodyData[];
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

