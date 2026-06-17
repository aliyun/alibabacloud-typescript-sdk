// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLProtectTrendResponseBodyTrendList extends $dara.Model {
  /**
   * @remarks
   * The total number of sessions that trigger the alert action in access control policies at the specified point in time.
   * 
   * @example
   * 20
   */
  alertCnt?: number;
  /**
   * @remarks
   * The total number of sessions that are allowed by access control policies at the specified point in time.
   * 
   * @example
   * 10
   */
  passCnt?: number;
  /**
   * @remarks
   * The number of sessions blocked by access control policies for internet traffic on the current day.
   * 
   * @example
   * 100
   */
  protectCnt?: number;
  /**
   * @remarks
   * The timestamp that indicates the start of the query time range. Unit: seconds.
   * 
   * @example
   * 1697299200
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      alertCnt: 'AlertCnt',
      passCnt: 'PassCnt',
      protectCnt: 'ProtectCnt',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCnt: 'number',
      passCnt: 'number',
      protectCnt: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeACLProtectTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of inbound sessions blocked by access control policies for internet traffic.
   * 
   * @example
   * 100
   */
  inProtectCnt?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 0
   */
  interVPCProtectCnt?: number;
  /**
   * @remarks
   * The interval between data points. Unit: seconds.
   * 
   * @example
   * 86400
   */
  interval?: number;
  /**
   * @remarks
   * The number of outbound sessions blocked by access control policies for internet traffic.
   * 
   * @example
   * 200
   */
  outProtectCnt?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9063AB86-6FFA-5B2D-A16D-697C966DECA3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of sessions that trigger the alert action in access control policies in the query time range.
   * 
   * @example
   * 100
   */
  totalAlertCnt?: number;
  /**
   * @remarks
   * The total number of sessions that are allowed by access control policies in the query time range.
   * 
   * @example
   * 100
   */
  totalPassCnt?: number;
  /**
   * @remarks
   * The total number of sessions blocked by access control policies for internet traffic.
   * 
   * @example
   * 300
   */
  totalProtectCnt?: number;
  /**
   * @remarks
   * The trend of sessions blocked by access control policies for internet traffic.
   */
  trendList?: DescribeACLProtectTrendResponseBodyTrendList[];
  static names(): { [key: string]: string } {
    return {
      inProtectCnt: 'InProtectCnt',
      interVPCProtectCnt: 'InterVPCProtectCnt',
      interval: 'Interval',
      outProtectCnt: 'OutProtectCnt',
      requestId: 'RequestId',
      totalAlertCnt: 'TotalAlertCnt',
      totalPassCnt: 'TotalPassCnt',
      totalProtectCnt: 'TotalProtectCnt',
      trendList: 'TrendList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inProtectCnt: 'number',
      interVPCProtectCnt: 'number',
      interval: 'number',
      outProtectCnt: 'number',
      requestId: 'string',
      totalAlertCnt: 'number',
      totalPassCnt: 'number',
      totalProtectCnt: 'number',
      trendList: { 'type': 'array', 'itemType': DescribeACLProtectTrendResponseBodyTrendList },
    };
  }

  validate() {
    if(Array.isArray(this.trendList)) {
      $dara.Model.validateArray(this.trendList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

