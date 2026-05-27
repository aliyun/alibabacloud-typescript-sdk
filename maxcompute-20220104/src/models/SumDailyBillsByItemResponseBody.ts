// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumDailyBillsByItemResponseBodyDataItemSummaryBillsDailySumBillsItemBills extends $dara.Model {
  /**
   * @example
   * 433
   */
  cost?: string;
  /**
   * @example
   * RMB
   */
  currency?: string;
  /**
   * @example
   * empty
   */
  itemName?: string;
  /**
   * @example
   * 60
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

export class SumDailyBillsByItemResponseBodyDataItemSummaryBillsDailySumBills extends $dara.Model {
  /**
   * @example
   * 31
   */
  cost?: string;
  /**
   * @example
   * RMB
   */
  currency?: string;
  /**
   * @example
   * 20260409
   */
  dateTime?: string;
  itemBills?: SumDailyBillsByItemResponseBodyDataItemSummaryBillsDailySumBillsItemBills[];
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
      itemBills: { 'type': 'array', 'itemType': SumDailyBillsByItemResponseBodyDataItemSummaryBillsDailySumBillsItemBills },
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

export class SumDailyBillsByItemResponseBodyDataItemSummaryBills extends $dara.Model {
  /**
   * @example
   * RMB
   */
  currency?: string;
  dailySumBills?: SumDailyBillsByItemResponseBodyDataItemSummaryBillsDailySumBills[];
  /**
   * @example
   * DRStorage
   */
  itemName?: string;
  /**
   * @example
   * 50
   */
  percentage?: number;
  /**
   * @example
   * OdpsStandard
   */
  specCode?: string;
  /**
   * @example
   * 10000
   */
  totalCost?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'currency',
      dailySumBills: 'dailySumBills',
      itemName: 'itemName',
      percentage: 'percentage',
      specCode: 'specCode',
      totalCost: 'totalCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      dailySumBills: { 'type': 'array', 'itemType': SumDailyBillsByItemResponseBodyDataItemSummaryBillsDailySumBills },
      itemName: 'string',
      percentage: 'number',
      specCode: 'string',
      totalCost: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dailySumBills)) {
      $dara.Model.validateArray(this.dailySumBills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SumDailyBillsByItemResponseBodyData extends $dara.Model {
  itemSummaryBills?: SumDailyBillsByItemResponseBodyDataItemSummaryBills[];
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 60
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      itemSummaryBills: 'itemSummaryBills',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemSummaryBills: { 'type': 'array', 'itemType': SumDailyBillsByItemResponseBodyDataItemSummaryBills },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.itemSummaryBills)) {
      $dara.Model.validateArray(this.itemSummaryBills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SumDailyBillsByItemResponseBody extends $dara.Model {
  data?: SumDailyBillsByItemResponseBodyData;
  /**
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @example
   * 0bc3b4ab17217876841756121e1349
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
      data: SumDailyBillsByItemResponseBodyData,
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

