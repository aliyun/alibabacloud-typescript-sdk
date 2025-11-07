// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaStatisticsListResponseBodyItems extends $dara.Model {
  /**
   * @example
   * MOBILE_ONLINE_LENGTH
   */
  api?: string;
  apiName?: string;
  /**
   * @example
   * 0
   */
  billCount?: number;
  /**
   * @example
   * 0
   */
  billRate?: string;
  /**
   * @example
   * 0
   */
  chargeCount?: number;
  /**
   * @example
   * 11/8
   */
  date?: string;
  /**
   * @example
   * CUCC
   */
  ispName?: string;
  /**
   * @example
   * 0
   */
  noRecordCount?: number;
  /**
   * @example
   * 9
   */
  passedCount?: number;
  /**
   * @example
   * 20
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

export class DescribeMetaStatisticsListResponseBody extends $dara.Model {
  items?: DescribeMetaStatisticsListResponseBodyItems[];
  /**
   * @example
   * 3F860B3F-76B7-5555-A907-2F4433BF8868
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeMetaStatisticsListResponseBodyItems },
      requestId: 'string',
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

