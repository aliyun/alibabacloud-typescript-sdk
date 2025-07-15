// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRTSNativeSDKFirstFrameDelayResponseBodyFrameDelayData extends $dara.Model {
  /**
   * @remarks
   * The average latency of first frames within the period of time.
   * 
   * @example
   * 400
   */
  frameDelay?: string;
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
      frameDelay: 'FrameDelay',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameDelay: 'string',
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

export class DescribeRTSNativeSDKFirstFrameDelayResponseBody extends $dara.Model {
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
  frameDelayData?: DescribeRTSNativeSDKFirstFrameDelayResponseBodyFrameDelayData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
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
      frameDelayData: 'FrameDelayData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      endTime: 'string',
      frameDelayData: { 'type': 'array', 'itemType': DescribeRTSNativeSDKFirstFrameDelayResponseBodyFrameDelayData },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.frameDelayData)) {
      $dara.Model.validateArray(this.frameDelayData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

