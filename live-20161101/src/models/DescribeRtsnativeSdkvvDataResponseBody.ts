// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRTSNativeSDKVvDataResponseBodyVvData extends $dara.Model {
  /**
   * @remarks
   * The start time of the time interval. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The total number of successful playbacks within the specified time period.
   * 
   * @example
   * 99
   */
  vvSuccess?: string;
  /**
   * @remarks
   * The total number of playbacks within the specified time period.
   * 
   * @example
   * 100
   */
  vvTotal?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      vvSuccess: 'VvSuccess',
      vvTotal: 'VvTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      vvSuccess: 'string',
      vvTotal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRTSNativeSDKVvDataResponseBody extends $dara.Model {
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
   * Id
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
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
  /**
   * @remarks
   * The total playback count and total successful playback count for each time interval. Unit: count.
   */
  vvData?: DescribeRTSNativeSDKVvDataResponseBodyVvData[];
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      vvData: 'VvData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      vvData: { 'type': 'array', 'itemType': DescribeRTSNativeSDKVvDataResponseBodyVvData },
    };
  }

  validate() {
    if(Array.isArray(this.vvData)) {
      $dara.Model.validateArray(this.vvData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

