// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRTSNativeSDKFirstFrameCostResponseBodyFirstFrameCostData extends $dara.Model {
  /**
   * @remarks
   * The time elapsed from initialization to connection establishment.
   * 
   * @example
   * 100
   */
  connected?: string;
  /**
   * @remarks
   * The time elapsed from connection establishment to subscription.
   * 
   * @example
   * 89
   */
  finishGetStreamInfo?: string;
  /**
   * @remarks
   * The time elapsed from first packet processing to display of the first frame.
   * 
   * @example
   * 32
   */
  firstFrameComplete?: string;
  /**
   * @remarks
   * The time elapsed from subscription to first packet processing.
   * 
   * @example
   * 132
   */
  firstPacket?: string;
  /**
   * @remarks
   * The time consumed by initialization.
   * 
   * @example
   * 1100
   */
  initialized?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2021-12-10T20:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      connected: 'Connected',
      finishGetStreamInfo: 'FinishGetStreamInfo',
      firstFrameComplete: 'FirstFrameComplete',
      firstPacket: 'FirstPacket',
      initialized: 'Initialized',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connected: 'string',
      finishGetStreamInfo: 'string',
      firstFrameComplete: 'string',
      firstPacket: 'string',
      initialized: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRTSNativeSDKFirstFrameCostResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time granularity.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * The end of the time range for which the data was queried.
   * 
   * @example
   * 2021-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The average latency of first frames at each interval. Unit: milliseconds.
   */
  firstFrameCostData?: DescribeRTSNativeSDKFirstFrameCostResponseBodyFirstFrameCostData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BC858082-736F-4A25-867B-E5B67C85ACF7
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range for which the data was queried.
   * 
   * @example
   * 2021-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      endTime: 'EndTime',
      firstFrameCostData: 'FirstFrameCostData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      endTime: 'string',
      firstFrameCostData: { 'type': 'array', 'itemType': DescribeRTSNativeSDKFirstFrameCostResponseBodyFirstFrameCostData },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firstFrameCostData)) {
      $dara.Model.validateArray(this.firstFrameCostData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

