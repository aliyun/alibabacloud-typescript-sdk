// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaStatisticsPageListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * API.
   * 
   * @example
   * ID_PERIOD
   */
  api?: string;
  /**
   * @remarks
   * Name corresponding to the API:
   * - **ID_CARD_2_META**: ID Card Two-Element Verification
   * - **ID_PERIOD**: ID Card Validity Verification Period
   * - **MOBILE_ONLINE_LENGTH**: Mobile Online Duration
   * - **MOBILE_ONLINE_STATUS**: Mobile Online Status
   * - **MOBILE_3_META_SIMPLE**: Mobile Number Three-Element Verification (Simple)
   * - **MOBILE_3_META**: Mobile Number Three-Element Verification (Detailed)
   * - **MOBILE_2_META**: Mobile Number Two-Element Verification
   * - **BANK_CARD_N_META**: Bank Card Verification (Detailed)
   * - **MOBILE_DETECT**: Number Detection
   *  -**VEHICLE_N_META**: Vehicle Element Verification (Enhanced)
   * - **VEHICLE_PENTA_INFO**: Vehicle Five-Element Information Recognition
   * - **VEHICLE_LICENSE_INFO**: Vehicle Information Recognition
   * - **VEHICLE_INSURE_DATE**: Vehicle Insurance Date Query
   * - **VEHICLE_CHECK**: Vehicle Element Verification
   * 
   * @example
   * 车辆要素核验增强版
   */
  apiName?: string;
  /**
   * @remarks
   * Number of hits (billed).
   * 
   * @example
   * 10
   */
  billCount?: number;
  /**
   * @remarks
   * Hit rate (%).
   * 
   * @example
   * 80
   */
  billRate?: string;
  /**
   * @remarks
   * Number of successful mobile number queries (exclusive to Number Detection).
   * 
   * @example
   * 1
   */
  chargeCount?: number;
  /**
   * @remarks
   * Date.
   * 
   * @example
   * 11/8
   */
  date?: string;
  /**
   * @remarks
   * Carrier name:
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
   * Number of calls with no record information.
   * 
   * @example
   * 12
   */
  noRecordCount?: number;
  /**
   * @remarks
   * Number of passed authentications.
   * 
   * @example
   * 21
   */
  passedCount?: number;
  /**
   * @remarks
   * Authentication pass rate (%).
   * 
   * @example
   * 80
   */
  passedRate?: string;
  /**
   * @remarks
   * Number of successful requests.
   * 
   * @example
   * 1
   */
  successCount?: number;
  /**
   * @remarks
   * Call success rate (%).
   * 
   * @example
   * 100
   */
  successRate?: string;
  /**
   * @remarks
   * Total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  /**
   * @remarks
   * Number of failed calls.
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
   * Current page number.
   * 
   * @example
   * 3
   */
  currentPage?: number;
  /**
   * @remarks
   * Paginated list data.
   */
  items?: DescribeMetaStatisticsPageListResponseBodyItems[];
  /**
   * @remarks
   * Number of data entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * C379C9E4-4DA0-5D0B-821B-25E2B8693D48
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
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

