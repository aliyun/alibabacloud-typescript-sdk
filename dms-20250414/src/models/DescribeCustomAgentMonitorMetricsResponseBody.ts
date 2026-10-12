// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomAgentMonitorMetricsResponseBodyDataTrend extends $dara.Model {
  /**
   * @remarks
   * The number of active users within the statistical period.
   * 
   * @example
   * 2
   */
  activeUserCount?: number;
  /**
   * @remarks
   * The number of dislikes within the statistical period.
   * 
   * @example
   * 0
   */
  dislikeCount?: number;
  /**
   * @remarks
   * The number of likes within the statistical period.
   * 
   * @example
   * 1
   */
  likeCount?: number;
  /**
   * @remarks
   * The number of sessions within the statistical period.
   * 
   * @example
   * 10
   */
  sessionCount?: number;
  /**
   * @remarks
   * The statistical time. For daily granularity, the format is 2026-09-01. For hourly granularity, the format is 2026-09-01 13:00.
   * 
   * @example
   * 2026-09-01
   */
  statTime?: string;
  /**
   * @remarks
   * The start timestamp of the statistical period (epoch millis).
   * 
   * @example
   * 1782835200000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      activeUserCount: 'ActiveUserCount',
      dislikeCount: 'DislikeCount',
      likeCount: 'LikeCount',
      sessionCount: 'SessionCount',
      statTime: 'StatTime',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeUserCount: 'number',
      dislikeCount: 'number',
      likeCount: 'number',
      sessionCount: 'number',
      statTime: 'string',
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

export class DescribeCustomAgentMonitorMetricsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of active users.
   * 
   * @example
   * 6
   */
  activeUserCount?: number;
  /**
   * @remarks
   * The custom agent ID.
   * 
   * @example
   * ca-4y3ca4khkcu**********ysf
   */
  customAgentId?: string;
  /**
   * @remarks
   * The total number of dislikes.
   * 
   * @example
   * 0
   */
  dislikeCount?: number;
  /**
   * @remarks
   * The end time of the statistical period (epoch millis).
   * 
   * @example
   * 1756742400000
   */
  endTime?: number;
  /**
   * @remarks
   * The aggregation granularity: DAY / HOUR.
   * 
   * @example
   * DAY
   */
  granularity?: string;
  /**
   * @remarks
   * The total number of likes.
   * 
   * @example
   * 10
   */
  likeCount?: number;
  /**
   * @remarks
   * The total number of sessions.
   * 
   * @example
   * 102
   */
  sessionCount?: number;
  /**
   * @remarks
   * The start time of the statistical period (epoch millis).
   * 
   * @example
   * 1782835200000
   */
  startTime?: number;
  /**
   * @remarks
   * The trend data aggregated by the specified granularity. Time points without data are filled with 0. The data is sorted in chronological order.
   */
  trend?: DescribeCustomAgentMonitorMetricsResponseBodyDataTrend[];
  static names(): { [key: string]: string } {
    return {
      activeUserCount: 'ActiveUserCount',
      customAgentId: 'CustomAgentId',
      dislikeCount: 'DislikeCount',
      endTime: 'EndTime',
      granularity: 'Granularity',
      likeCount: 'LikeCount',
      sessionCount: 'SessionCount',
      startTime: 'StartTime',
      trend: 'Trend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeUserCount: 'number',
      customAgentId: 'string',
      dislikeCount: 'number',
      endTime: 'number',
      granularity: 'string',
      likeCount: 'number',
      sessionCount: 'number',
      startTime: 'number',
      trend: { 'type': 'array', 'itemType': DescribeCustomAgentMonitorMetricsResponseBodyDataTrend },
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

export class DescribeCustomAgentMonitorMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: DescribeCustomAgentMonitorMetricsResponseBodyData;
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * InvalidTid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E0D21075-CD3E-4D98-8264-FD8AD04A63B6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeCustomAgentMonitorMetricsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

