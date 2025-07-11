// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAbnormalTrendResponseBodyTrend extends $dara.Model {
  /**
   * @remarks
   * The number of high risks.
   * 
   * @example
   * 12
   */
  abnormalHigh?: number;
  /**
   * @remarks
   * The number of low risks.
   * 
   * @example
   * 23
   */
  abnormalLow?: number;
  /**
   * @remarks
   * The number of medium risks.
   * 
   * @example
   * 14
   */
  abnormalMedium?: number;
  /**
   * @remarks
   * The time at which the API was called. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * >Notice: The parameter has been deprecated, it is recommended to use the Timestamp parameter.
   * 
   * @example
   * 1722268800
   */
  timeStamp?: number;
  /**
   * @remarks
   * The time at which the API was called. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
   * 
   * @example
   * 1722268800
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      abnormalHigh: 'AbnormalHigh',
      abnormalLow: 'AbnormalLow',
      abnormalMedium: 'AbnormalMedium',
      timeStamp: 'TimeStamp',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalHigh: 'number',
      abnormalLow: 'number',
      abnormalMedium: 'number',
      timeStamp: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAbnormalTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The trends of risks.
   */
  trend?: DescribeUserAbnormalTrendResponseBodyTrend[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trend: 'Trend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trend: { 'type': 'array', 'itemType': DescribeUserAbnormalTrendResponseBodyTrend },
    };
  }

  validate() {
    if(Array.isArray(this.trend)) {
      $dara.Model.validateArray(this.trend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

