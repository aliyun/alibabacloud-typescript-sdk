// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeACLProtectTrendResponseBodyTrendList extends $dara.Model {
  /**
   * @remarks
   * The total number of sessions that matched an ACL policy and triggered the monitor (alert) action at this point in time.
   * 
   * @example
   * 20
   */
  alertCnt?: number;
  /**
   * @remarks
   * The total number of sessions that matched an ACL policy and were allowed at this point in time.
   * 
   * @example
   * 10
   */
  passCnt?: number;
  /**
   * @remarks
   * The number of Internet access control interceptions on the day.
   * 
   * @example
   * 100
   */
  protectCnt?: number;
  /**
   * @remarks
   * The timestamp of 00:00 on each day. Unit: seconds. Indicates the date.
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
   * The number of inbound interceptions by Internet access control.
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
   * 
   * @deprecated
   */
  interVPCProtectCnt?: number;
  /**
   * @remarks
   * The interval at which data is returned. Unit: seconds. A result is returned at each interval.
   * 
   * @example
   * 86400
   */
  interval?: number;
  /**
   * @remarks
   * The number of outbound interceptions by Internet access control.
   * 
   * @example
   * 200
   */
  outProtectCnt?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9063AB86-6FFA-5B2D-A16D-697C966DECA3
   */
  requestId?: string;
  /**
   * @remarks
   * The cumulative total of AlertCnt across all time points within the query time range. This value indicates the total number of sessions that matched an ACL policy and triggered the monitor (alert) action during the entire time period.
   * 
   * @example
   * 100
   */
  totalAlertCnt?: number;
  /**
   * @remarks
   * The cumulative total of PassCnt across all time points within the query time range. This value indicates the total number of sessions that matched an ACL policy and were allowed during the entire time period.
   * 
   * @example
   * 100
   */
  totalPassCnt?: number;
  /**
   * @remarks
   * The total number of Internet access control interceptions.
   * 
   * @example
   * 300
   */
  totalProtectCnt?: number;
  /**
   * @remarks
   * The list of Internet access control intercept trend data.
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

