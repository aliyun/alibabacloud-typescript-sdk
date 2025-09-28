// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGateVerifyStatisticPublicResponseBodyDataDayStatistic extends $dara.Model {
  /**
   * @remarks
   * The date. This field is accurate to the day. The value of this field is in the YYYYMMDD format. Example: 20220103.
   * 
   * @example
   * 20220103
   */
  statisticDateStr?: string;
  /**
   * @remarks
   * The failed calls on the day.
   * 
   * @example
   * 20
   */
  totalFail?: number;
  /**
   * @remarks
   * The successful calls on the day.
   * 
   * @example
   * 0
   */
  totalSuccess?: number;
  /**
   * @remarks
   * The unknown calls on the day.
   * 
   * @example
   * 0
   */
  totalUnknown?: number;
  static names(): { [key: string]: string } {
    return {
      statisticDateStr: 'StatisticDateStr',
      totalFail: 'TotalFail',
      totalSuccess: 'TotalSuccess',
      totalUnknown: 'TotalUnknown',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statisticDateStr: 'string',
      totalFail: 'number',
      totalSuccess: 'number',
      totalUnknown: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyStatisticPublicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the daily calls.
   */
  dayStatistic?: QueryGateVerifyStatisticPublicResponseBodyDataDayStatistic[];
  /**
   * @remarks
   * The total calls.
   * 
   * @example
   * 20
   */
  total?: number;
  /**
   * @remarks
   * The failed calls.
   * 
   * @example
   * 20
   */
  totalFail?: number;
  /**
   * @remarks
   * The successful calls.
   * 
   * @example
   * 0
   */
  totalSuccess?: number;
  /**
   * @remarks
   * The unknown calls.
   * 
   * @example
   * 0
   */
  totalUnknown?: number;
  static names(): { [key: string]: string } {
    return {
      dayStatistic: 'DayStatistic',
      total: 'Total',
      totalFail: 'TotalFail',
      totalSuccess: 'TotalSuccess',
      totalUnknown: 'TotalUnknown',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayStatistic: { 'type': 'array', 'itemType': QueryGateVerifyStatisticPublicResponseBodyDataDayStatistic },
      total: 'number',
      totalFail: 'number',
      totalSuccess: 'number',
      totalUnknown: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dayStatistic)) {
      $dara.Model.validateArray(this.dayStatistic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGateVerifyStatisticPublicResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   If OK is returned, the request is successful.
   * *   For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The information about the calls of Phone Number Verification Service, including the total calls, the successful calls, failed calls, unknown calls, and daily calls within the statistical date range.
   */
  data?: QueryGateVerifyStatisticPublicResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8906582E-6722
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryGateVerifyStatisticPublicResponseBodyData,
      message: 'string',
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

