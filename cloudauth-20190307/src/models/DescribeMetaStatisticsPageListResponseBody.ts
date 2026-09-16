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
  /**
   * @remarks
   * The name corresponding to the API. Valid values:
   * - **ID_CARD_2_META**: ID card two-element verification
   * - **ID_PERIOD**: ID card validity period verification
   * - **MOBILE_ONLINE_LENGTH**: mobile number online duration
   * - **MOBILE_ONLINE_STATUS**: mobile number online status
   * - **MOBILE_3_META_SIMPLE**: mobile number three-element verification (simple edition)
   * - **MOBILE_3_META**: mobile number three-element verification (detailed edition)
   * - **MOBILE_2_META**: mobile number two-element verification
   * - **BANK_CARD_N_META**: bank card verification (detailed edition)
   * - **MOBILE_DETECT**: phone number detection
   * - **VEHICLE_N_META**: vehicle element verification (enhanced edition)
   * - **VEHICLE_PENTA_INFO**: vehicle five-element information recognition
   * - **VEHICLE_LICENSE_INFO**: vehicle information recognition
   * - **VEHICLE_INSURE_DATE**: vehicle insurance date query
   * - **VEHICLE_CHECK**: vehicle element verification
   * 
   * @example
   * 车辆要素核验增强版
   */
  apiName?: string;
  /**
   * @remarks
   * The number of successful queries (billable).
   * 
   * @example
   * 10
   */
  billCount?: number;
  /**
   * @remarks
   * The query hit rate (%).
   * 
   * @example
   * 80
   */
  billRate?: string;
  /**
   * @remarks
   * The number of successful phone number queries (exclusive to phone number detection).
   * 
   * @example
   * 1
   */
  chargeCount?: number;
  /**
   * @remarks
   * The date. Format: M/d (month/day). For example, 11/8 indicates November 8.
   * 
   * @example
   * 11/8
   */
  date?: string;
  /**
   * @remarks
   * The carrier name. Valid values:
   * - **CMCC**: China Mobile
   * - **CUCC**: China Unicom
   * - **CTCC**: China Telecom
   * 
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @remarks
   * The number of calls with no education information found.
   * 
   * @example
   * 12
   */
  noRecordCount?: number;
  /**
   * @remarks
   * The number of authentication-passed transactions.
   * 
   * @example
   * 21
   */
  passedCount?: number;
  /**
   * @remarks
   * The authentication pass rate (%).
   * 
   * @example
   * 80
   */
  passedRate?: string;
  /**
   * @remarks
   * The number of successful requests.
   * 
   * @example
   * 1
   */
  successCount?: number;
  /**
   * @remarks
   * The call success rate (%).
   * 
   * @example
   * 100
   */
  successRate?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of authentication-failed calls.
   * 
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
   * @remarks
   * The current page number.
   * 
   * @example
   * 3
   */
  currentPage?: number;
  /**
   * @remarks
   * The paginated list data.
   */
  items?: DescribeMetaStatisticsPageListResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C379C9E4-4DA0-5D0B-821B-25E2B8693D48
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
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

