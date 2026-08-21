// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodPlayerMetricDataResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The average completion plays per user.
   * 
   * @example
   * 2
   */
  avgPerCompletionVv?: number;
  /**
   * @remarks
   * The average play duration per user, in milliseconds (ms).
   * 
   * @example
   * 100000
   */
  avgPerPlayDuration?: number;
  /**
   * @remarks
   * The average plays per user.
   * 
   * @example
   * 10
   */
  avgPerVv?: number;
  /**
   * @remarks
   * The average playback bitrate, in bps.
   * 
   * @example
   * 100
   */
  avgPlayBitrate?: number;
  /**
   * @remarks
   * The average play duration, in milliseconds (ms).
   * 
   * @example
   * 100000
   */
  avgPlayDuration?: number;
  /**
   * @remarks
   * The average start bitrate, in bps.
   * 
   * @example
   * 100
   */
  avgStartBitrate?: number;
  /**
   * @remarks
   * The average video duration, in milliseconds (ms).
   * 
   * @example
   * 100000
   */
  avgVideoDuration?: number;
  /**
   * @remarks
   * The completion rate.
   * 
   * @example
   * 0.8
   */
  completionRate?: number;
  /**
   * @remarks
   * The completion count.
   * 
   * @example
   * 500
   */
  completionVv?: number;
  /**
   * @remarks
   * The dimension.
   * 
   * @example
   * H265_MP4_WIFI
   */
  dimension?: string;
  /**
   * @remarks
   * The error count per 100 seconds.
   * 
   * @example
   * 1
   */
  errorCount100s?: number;
  /**
   * @remarks
   * The first frame time, in milliseconds (ms).
   * 
   * @example
   * 100
   */
  firstFrame?: number;
  /**
   * @remarks
   * The 5-second bounce rate.
   * 
   * @example
   * 0.1
   */
  jumpRate5s?: number;
  /**
   * @remarks
   * The play failure rate.
   * 
   * @example
   * 0.2
   */
  playFailRate?: number;
  /**
   * @remarks
   * The actual play count.
   * 
   * @example
   * 1000
   */
  realVv?: number;
  /**
   * @remarks
   * The instant play rate.
   * 
   * @example
   * 0.8
   */
  secondPlayRate?: number;
  /**
   * @remarks
   * The non-play rate.
   * 
   * @example
   * 0.01
   */
  seedFailRate?: number;
  /**
   * @remarks
   * The seek duration, in milliseconds (ms).
   * 
   * @example
   * 100
   */
  seekDuration?: number;
  /**
   * @remarks
   * The slow play rate.
   * 
   * @example
   * 0.2
   */
  slowPlayRate?: number;
  /**
   * @remarks
   * The stuttering count per 100 seconds.
   * 
   * @example
   * 2
   */
  stuckCount100s?: string;
  /**
   * @remarks
   * The stuttering rate by count.
   * 
   * @example
   * 0.1
   */
  stuckCountRate?: number;
  /**
   * @remarks
   * The stuttering duration per 100 seconds, in milliseconds (ms).
   * 
   * @example
   * 200
   */
  stuckDuration100s?: number;
  /**
   * @remarks
   * The timestamp of the data. Format: yyyy-mm-ddthh:mm:ssz (UTC).
   * 
   * @example
   * 2025-06-24T00:55:06Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total play duration, in milliseconds (ms).
   * 
   * @example
   * 100000
   */
  totalPlayDuration?: number;
  /**
   * @remarks
   * The number of playback users.
   * 
   * @example
   * 500
   */
  uv?: number;
  /**
   * @remarks
   * The play count.
   * 
   * @example
   * 800
   */
  vv?: number;
  static names(): { [key: string]: string } {
    return {
      avgPerCompletionVv: 'AvgPerCompletionVv',
      avgPerPlayDuration: 'AvgPerPlayDuration',
      avgPerVv: 'AvgPerVv',
      avgPlayBitrate: 'AvgPlayBitrate',
      avgPlayDuration: 'AvgPlayDuration',
      avgStartBitrate: 'AvgStartBitrate',
      avgVideoDuration: 'AvgVideoDuration',
      completionRate: 'CompletionRate',
      completionVv: 'CompletionVv',
      dimension: 'Dimension',
      errorCount100s: 'ErrorCount100s',
      firstFrame: 'FirstFrame',
      jumpRate5s: 'JumpRate5s',
      playFailRate: 'PlayFailRate',
      realVv: 'RealVv',
      secondPlayRate: 'SecondPlayRate',
      seedFailRate: 'SeedFailRate',
      seekDuration: 'SeekDuration',
      slowPlayRate: 'SlowPlayRate',
      stuckCount100s: 'StuckCount100s',
      stuckCountRate: 'StuckCountRate',
      stuckDuration100s: 'StuckDuration100s',
      timeStamp: 'TimeStamp',
      totalPlayDuration: 'TotalPlayDuration',
      uv: 'Uv',
      vv: 'Vv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgPerCompletionVv: 'number',
      avgPerPlayDuration: 'number',
      avgPerVv: 'number',
      avgPlayBitrate: 'number',
      avgPlayDuration: 'number',
      avgStartBitrate: 'number',
      avgVideoDuration: 'number',
      completionRate: 'number',
      completionVv: 'number',
      dimension: 'string',
      errorCount100s: 'number',
      firstFrame: 'number',
      jumpRate5s: 'number',
      playFailRate: 'number',
      realVv: 'number',
      secondPlayRate: 'number',
      seedFailRate: 'number',
      seekDuration: 'number',
      slowPlayRate: 'number',
      stuckCount100s: 'string',
      stuckCountRate: 'number',
      stuckDuration100s: 'number',
      timeStamp: 'string',
      totalPlayDuration: 'number',
      uv: 'number',
      vv: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodPlayerMetricDataResponseBodyExtend extends $dara.Model {
  /**
   * @remarks
   * The latest time with data points within the specified time range. Format: yyyy-mm-ddthh:mm:ssz (UTC).
   * 
   * @example
   * 2025-06-05T15:59:59Z
   */
  actualEndTime?: string;
  /**
   * @remarks
   * The earliest time with data points within the specified time range. Format: yyyy-mm-ddthh:mm:ssz (UTC).
   * 
   * @example
   * 2025-06-24T00:55:06Z
   */
  actualStartTime?: string;
  /**
   * @remarks
   * The time granularity of the queried data, in seconds (s).
   * 
   * @example
   * 3600
   */
  intervalSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      actualEndTime: 'ActualEndTime',
      actualStartTime: 'ActualStartTime',
      intervalSeconds: 'IntervalSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualEndTime: 'string',
      actualStartTime: 'string',
      intervalSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodPlayerMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned data.
   */
  dataList?: DescribeVodPlayerMetricDataResponseBodyDataList[];
  /**
   * @remarks
   * The extended information.
   */
  extend?: DescribeVodPlayerMetricDataResponseBodyExtend;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 5000
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data points.
   * 
   * @example
   * 500
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      extend: 'Extend',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeVodPlayerMetricDataResponseBodyDataList },
      extend: DescribeVodPlayerMetricDataResponseBodyExtend,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    if(this.extend && typeof (this.extend as any).validate === 'function') {
      (this.extend as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

