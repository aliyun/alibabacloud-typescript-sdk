// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRTSNativeSDKPlayTimeResponseBodyPlayTimeData extends $dara.Model {
  /**
   * @remarks
   * The average playback duration during the time interval. Unit: milliseconds.
   * 
   * @example
   * 1000
   */
  playTime?: string;
  /**
   * @remarks
   * The average stall duration during the time interval. Unit: milliseconds.
   * 
   * @example
   * 100
   */
  stallTime?: string;
  /**
   * @remarks
   * The start time of the time interval. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-10T20:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      playTime: 'PlayTime',
      stallTime: 'StallTime',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playTime: 'string',
      stallTime: 'string',
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

export class DescribeRTSNativeSDKPlayTimeResponseBody extends $dara.Model {
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
   * The end time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The average playback duration and average stall duration for each time interval. Unit: milliseconds.
   */
  playTimeData?: DescribeRTSNativeSDKPlayTimeResponseBodyPlayTimeData[];
  /**
   * @remarks
   * Id
   * 
   * @example
   * 7BF95F2A-3B24-4CDE-9346-7F6FA86697A1
   */
  requestId?: string;
  /**
   * @remarks
   * The start time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      endTime: 'EndTime',
      playTimeData: 'PlayTimeData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      endTime: 'string',
      playTimeData: { 'type': 'array', 'itemType': DescribeRTSNativeSDKPlayTimeResponseBodyPlayTimeData },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.playTimeData)) {
      $dara.Model.validateArray(this.playTimeData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

