// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAbnormalTrendResponseBodyTrend extends $dara.Model {
  /**
   * @remarks
   * The number of high-severity security risks.
   * 
   * @example
   * 12
   */
  abnormalHigh?: number;
  /**
   * @remarks
   * The number of low-severity security risks.
   * 
   * @example
   * 23
   */
  abnormalLow?: number;
  /**
   * @remarks
   * The number of medium-severity security risks.
   * 
   * @example
   * 14
   */
  abnormalMedium?: number;
  /**
   * @remarks
   * The point in time when the statistics were collected. This value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * @example
   * 1722268800
   * 
   * @deprecated
   */
  timeStamp?: number;
  /**
   * @remarks
   * The point in time when the statistics were collected. This value is a UNIX timestamp in UTC. Unit: seconds.
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
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The list of API security risk trend data points.
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

