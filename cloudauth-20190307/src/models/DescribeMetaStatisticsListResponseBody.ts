// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaStatisticsListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The commodity (product) code.
   * 
   * @example
   * MOBILE_ONLINE_LENGTH
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
   * - **VEHICLE_CHECK**: vehicle element verification.
   * 
   * @example
   * 身份证二要素
   */
  apiName?: string;
  /**
   * @remarks
   * The number of successful queries (billable).
   * 
   * @example
   * 0
   */
  billCount?: number;
  /**
   * @remarks
   * The query hit rate (%).
   * 
   * @example
   * 0
   */
  billRate?: string;
  /**
   * @remarks
   * The number of successful phone number queries (exclusive to phone number detection).
   * 
   * @example
   * 0
   */
  chargeCount?: number;
  /**
   * @remarks
   * The date.
   * 
   * @example
   * 11/8
   */
  date?: string;
  /**
   * @remarks
   * The name of the telecommunications service provider. Valid values:
   * - **CMCC**: China Mobile
   * - **CUCC**: China Unicom
   * - **CTCC**: China Telecom.
   * 
   * @example
   * CUCC
   */
  ispName?: string;
  /**
   * @remarks
   * The number of calls with no education information found.
   * 
   * @example
   * 0
   */
  noRecordCount?: number;
  /**
   * @remarks
   * The number of authentication-passed transactions.
   * 
   * @example
   * 9
   */
  passedCount?: number;
  /**
   * @remarks
   * The authentication pass rate (%).
   * 
   * @example
   * 20
   */
  passedRate?: string;
  /**
   * @remarks
   * The number of successful calls.
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
   * The total number of calls.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of authentication-failed transactions.
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

export class DescribeMetaStatisticsListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of statistics information.
   */
  items?: DescribeMetaStatisticsListResponseBodyItems[];
  /**
   * @remarks
   * The ID of the request.
   * 
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

