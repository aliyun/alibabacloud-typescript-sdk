// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodPlayerMetricDataResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 2
   */
  avgPerCompletionVv?: number;
  /**
   * @example
   * 100000
   */
  avgPerPlayDuration?: number;
  /**
   * @example
   * 10
   */
  avgPerVv?: number;
  /**
   * @example
   * 100
   */
  avgPlayBitrate?: number;
  /**
   * @example
   * 100000
   */
  avgPlayDuration?: number;
  /**
   * @example
   * 100
   */
  avgStartBitrate?: number;
  /**
   * @example
   * 100000
   */
  avgVideoDuration?: number;
  /**
   * @example
   * 0.8
   */
  completionRate?: number;
  /**
   * @example
   * 500
   */
  completionVv?: number;
  /**
   * @example
   * H265_MP4_WIFI
   */
  dimension?: string;
  /**
   * @example
   * 1
   */
  errorCount100s?: number;
  /**
   * @example
   * 100
   */
  firstFrame?: number;
  /**
   * @example
   * 0.1
   */
  jumpRate5s?: number;
  /**
   * @example
   * 0.2
   */
  playFailRate?: number;
  /**
   * @example
   * 1000
   */
  realVv?: number;
  /**
   * @example
   * 0.8
   */
  secondPlayRate?: number;
  /**
   * @example
   * 0.01
   */
  seedFailRate?: number;
  /**
   * @example
   * 100
   */
  seekDuration?: number;
  /**
   * @example
   * 0.2
   */
  slowPlayRate?: number;
  /**
   * @example
   * 2
   */
  stuckCount100s?: string;
  /**
   * @example
   * 0.1
   */
  stuckCountRate?: number;
  /**
   * @example
   * 200
   */
  stuckDuration100s?: number;
  /**
   * @example
   * 2025-06-24T00:55:06Z
   */
  timeStamp?: string;
  /**
   * @example
   * 100000
   */
  totalPlayDuration?: number;
  /**
   * @example
   * 500
   */
  uv?: number;
  /**
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
   * @example
   * 2025-06-05T15:59:59Z
   */
  actualEndTime?: string;
  /**
   * @example
   * 2025-06-24T00:55:06Z
   */
  actualStartTime?: string;
  /**
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
  dataList?: DescribeVodPlayerMetricDataResponseBodyDataList[];
  extend?: DescribeVodPlayerMetricDataResponseBodyExtend;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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

