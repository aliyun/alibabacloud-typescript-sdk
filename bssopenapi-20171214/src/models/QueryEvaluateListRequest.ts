// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEvaluateListRequest extends $dara.Model {
  /**
   * @remarks
   * The billing cycle.
   * 
   * @example
   * 202003
   */
  billCycle?: string;
  /**
   * @remarks
   * The market types in invoices.
   * 
   * >  By default, this parameter is left empty. If this parameter is left empty, all market types are queried.
   * 
   * @example
   * ALIYUN
   */
  bizTypeList?: string[];
  /**
   * @remarks
   * The maximum amount to be queried.
   * 
   * @example
   * 1000
   */
  endAmount?: number;
  /**
   * @remarks
   * The latest time when an order is paid Specify the time in the yyyy-mm-dd hh:mm:ss format.
   * 
   * @example
   * 2020-02-02 15:00:00
   */
  endBizTime?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2020-03-02 12:00:00
   */
  endSearchTime?: string;
  /**
   * @remarks
   * The ID of the external order.
   * 
   * @example
   * 2387432832696
   */
  outBizId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the sort. Valid values:
   * 
   * *   1: Sort invoices by ID in descending order.
   * *   2: Sort invoices by invoice type in descending order, and then sort invoices of the same type by ID in descending order.
   * *   3: Sort invoices by invoice type in ascending order, and then sort invoices of the same type by ID in descending order.
   * 
   * @example
   * 1
   */
  sortType?: number;
  /**
   * @remarks
   * The minimum amount to be queried.
   * 
   * @example
   * 100
   */
  startAmount?: number;
  /**
   * @remarks
   * The earliest time when an order is paid. Specify the time in the yyyy-mm-dd hh:mm:ss format.
   * 
   * @example
   * 2020-02-02 12:00:00
   */
  startBizTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2020-02-02 12:00:00
   */
  startSearchTime?: string;
  /**
   * @remarks
   * The type of orders to be queried. Valid values:
   * 
   * *   1: the orders in which the invoiceable amount is negative.
   * *   2: the orders in which the invoiceable amount is positive.
   * *   3: the orders in which the invoiceable amount is not 0.
   * *   4: the orders in which the amount that has been invoiced is greater than 0.
   * 
   * >  By default, this parameter is left empty. If this parameter is left empty, all orders are queried.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      billCycle: 'BillCycle',
      bizTypeList: 'BizTypeList',
      endAmount: 'EndAmount',
      endBizTime: 'EndBizTime',
      endSearchTime: 'EndSearchTime',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortType: 'SortType',
      startAmount: 'StartAmount',
      startBizTime: 'StartBizTime',
      startSearchTime: 'StartSearchTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billCycle: 'string',
      bizTypeList: { 'type': 'array', 'itemType': 'string' },
      endAmount: 'number',
      endBizTime: 'string',
      endSearchTime: 'string',
      outBizId: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      sortType: 'number',
      startAmount: 'number',
      startBizTime: 'string',
      startSearchTime: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bizTypeList)) {
      $dara.Model.validateArray(this.bizTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

