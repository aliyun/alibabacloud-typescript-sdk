// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNetworkRttReportResponseBodyNetworkRttReportDataModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the app instance group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The number of users that meet the low-RTT criteria of the report. Unit: users. The current API operation does not return the specific threshold.
   * 
   * @example
   * 85
   */
  lowRttUserCount?: number;
  /**
   * @remarks
   * The ratio of low-RTT users to the total number of users included in the statistics. Valid values: 0 to 1. To obtain the percentage, multiply the value by 100.
   * 
   * @example
   * 0.85
   */
  lowRttUserRate?: number;
  /**
   * @remarks
   * The ID of the business region to which the report data belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The average RTT of all users included in the statistics. Unit: milliseconds.
   * 
   * @example
   * 35.8
   */
  rttAvg?: number;
  /**
   * @remarks
   * The maximum value among the average RTTs of all users. Unit: milliseconds.
   * 
   * @example
   * 86.2
   */
  rttMax?: number;
  /**
   * @remarks
   * The minimum value among the average RTTs of all users. Unit: milliseconds.
   * 
   * @example
   * 12.5
   */
  rttMin?: number;
  /**
   * @remarks
   * The end time of the statistical window. Format: `yyyy-MM-dd HH:mm:ss`. The string itself does not carry a time zone and is interpreted as Asia/Shanghai (UTC+8).
   * 
   * @example
   * 2026-09-01 10:05:00
   */
  statEndDate?: string;
  /**
   * @remarks
   * The start time of the statistical window. Format: `yyyy-MM-dd HH:mm:ss`. The string itself does not carry a time zone and is interpreted as Asia/Shanghai (UTC+8).
   * 
   * @example
   * 2026-09-01 10:00:00
   */
  statStartDate?: string;
  /**
   * @remarks
   * The total number of users included in the RTT calculation for the current statistical window. Unit: users.
   * 
   * @example
   * 100
   */
  totalUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      lowRttUserCount: 'LowRttUserCount',
      lowRttUserRate: 'LowRttUserRate',
      regionId: 'RegionId',
      rttAvg: 'RttAvg',
      rttMax: 'RttMax',
      rttMin: 'RttMin',
      statEndDate: 'StatEndDate',
      statStartDate: 'StatStartDate',
      totalUserCount: 'TotalUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      lowRttUserCount: 'number',
      lowRttUserRate: 'number',
      regionId: 'string',
      rttAvg: 'number',
      rttMax: 'number',
      rttMin: 'number',
      statEndDate: 'string',
      statStartDate: 'string',
      totalUserCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNetworkRttReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. `200` indicates that the request is successful. Other values indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of records that meet the query conditions.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The description of the request processing result. `success` is usually returned when the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The list of network RTT report data.
   */
  networkRttReportDataModel?: QueryNetworkRttReportResponseBodyNetworkRttReportDataModel[];
  /**
   * @remarks
   * The page number corresponding to the current response.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page used in the current response.
   * 
   * @example
   * 200
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot request issues.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      message: 'Message',
      networkRttReportDataModel: 'NetworkRttReportDataModel',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      message: 'string',
      networkRttReportDataModel: { 'type': 'array', 'itemType': QueryNetworkRttReportResponseBodyNetworkRttReportDataModel },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkRttReportDataModel)) {
      $dara.Model.validateArray(this.networkRttReportDataModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

