// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRTSNativeSDKPlayFailStatusResponseBodyPlayFailStatus extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2021-12-10T20:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The status code that indicates failed DNS resolution.
   * 
   * @example
   * 1
   */
  v20001?: string;
  /**
   * @remarks
   * The status code that indicates failed authentication.
   * 
   * @example
   * 2
   */
  v20002?: string;
  /**
   * @remarks
   * The status code that indicates a connection signaling timeout.
   * 
   * @example
   * 3
   */
  v20011?: string;
  /**
   * @remarks
   * The status code that indicates a subscription signaling error.
   * 
   * @example
   * 4
   */
  v20012?: string;
  /**
   * @remarks
   * The status code indicating that the stream to subscribe to does not exist.
   * 
   * @example
   * 5
   */
  v20013?: string;
  /**
   * @remarks
   * The status code that indicates a media packet collection timeout.
   * 
   * @example
   * 6
   */
  v20052?: string;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      v20001: 'V20001',
      v20002: 'V20002',
      v20011: 'V20011',
      v20012: 'V20012',
      v20013: 'V20013',
      v20052: 'V20052',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      v20001: 'string',
      v20002: 'string',
      v20011: 'string',
      v20012: 'string',
      v20013: 'string',
      v20052: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRTSNativeSDKPlayFailStatusResponseBody extends $dara.Model {
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
   * The number of error status codes at each interval.
   */
  playFailStatus?: DescribeRTSNativeSDKPlayFailStatusResponseBodyPlayFailStatus[];
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
      playFailStatus: 'PlayFailStatus',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      endTime: 'string',
      playFailStatus: { 'type': 'array', 'itemType': DescribeRTSNativeSDKPlayFailStatusResponseBodyPlayFailStatus },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.playFailStatus)) {
      $dara.Model.validateArray(this.playFailStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

