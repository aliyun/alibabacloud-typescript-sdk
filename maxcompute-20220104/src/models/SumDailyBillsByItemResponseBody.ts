// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SumDailyBillsByItemResponseBodyDataItemSummaryBillsDailySumBillsItemBills extends $dara.Model {
  /**
   * @remarks
   * The cost of the item.
   */
  cost?: string;
  /**
   * @remarks
   * The currency of the cost.
   */
  currency?: string;
  /**
   * @remarks
   * The name of the billable item.
   */
  itemName?: string;
  /**
   * @remarks
   * The item\\"s percentage of the daily total cost.
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
   * @remarks
   * The cost for the day.
   */
  cost?: string;
  /**
   * @remarks
   * The currency of the cost.
   */
  currency?: string;
  /**
   * @remarks
   * The date. Format: YYYYMMDD.
   */
  dateTime?: string;
  /**
   * @remarks
   * An array of detailed bills for the item on the specified day.
   */
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
   * @remarks
   * The currency of the cost.
   */
  currency?: string;
  /**
   * @remarks
   * An array of daily cost summaries for the item.
   */
  dailySumBills?: SumDailyBillsByItemResponseBodyDataItemSummaryBillsDailySumBills[];
  /**
   * @remarks
   * The name of the billable item.
   */
  itemName?: string;
  /**
   * @remarks
   * The item\\"s percentage of the total cost.
   */
  percentage?: number;
  /**
   * @remarks
   * The specification code of the item.
   */
  specCode?: string;
  /**
   * @remarks
   * The total cost of the item.
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
  /**
   * @remarks
   * An array of item-level cost summaries.
   */
  itemSummaryBills?: SumDailyBillsByItemResponseBodyDataItemSummaryBills[];
  /**
   * @remarks
   * The current page number.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
  /**
   * @remarks
   * The response data.
   */
  data?: SumDailyBillsByItemResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   */
  httpCode?: number;
  /**
   * @remarks
   * The unique identifier for the request.
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

