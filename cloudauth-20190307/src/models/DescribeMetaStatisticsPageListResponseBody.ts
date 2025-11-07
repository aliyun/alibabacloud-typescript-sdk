// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaStatisticsPageListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Api。
   * 
   * @example
   * ID_PERIOD
   */
  api?: string;
  apiName?: string;
  /**
   * @example
   * 10
   */
  billCount?: number;
  /**
   * @example
   * 80
   */
  billRate?: string;
  /**
   * @example
   * 1
   */
  chargeCount?: number;
  /**
   * @example
   * 11/8
   */
  date?: string;
  /**
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @example
   * 12
   */
  noRecordCount?: number;
  /**
   * @example
   * 21
   */
  passedCount?: number;
  /**
   * @example
   * 80
   */
  passedRate?: string;
  /**
   * @example
   * 1
   */
  successCount?: number;
  /**
   * @example
   * 100
   */
  successRate?: string;
  /**
   * @example
   * 4
   */
  totalCount?: number;
  /**
   * @example
   * 2
   */
  unpassedCount?: number;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      apiName: 'ApiName',
      billCount: 'BillCount',
      billRate: 'BillRate',
      chargeCount: 'ChargeCount',
      date: 'Date',
      ispName: 'IspName',
      noRecordCount: 'NoRecordCount',
      passedCount: 'PassedCount',
      passedRate: 'PassedRate',
      successCount: 'SuccessCount',
      successRate: 'SuccessRate',
      totalCount: 'TotalCount',
      unpassedCount: 'UnpassedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      apiName: 'string',
      billCount: 'number',
      billRate: 'string',
      chargeCount: 'number',
      date: 'string',
      ispName: 'string',
      noRecordCount: 'number',
      passedCount: 'number',
      passedRate: 'string',
      successCount: 'number',
      successRate: 'string',
      totalCount: 'number',
      unpassedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetaStatisticsPageListResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  currentPage?: number;
  items?: DescribeMetaStatisticsPageListResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * C379C9E4-4DA0-5D0B-821B-25E2B8693D48
   */
  requestId?: string;
  /**
   * @example
   * 7
   */
  totalCount?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeMetaStatisticsPageListResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
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

