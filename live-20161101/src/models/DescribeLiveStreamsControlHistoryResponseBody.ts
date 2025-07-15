// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamsControlHistoryResponseBodyControlInfoLiveStreamControlInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the operation performed.
   * 
   * @example
   * DescribeLiveStreamsControlHistory
   */
  action?: string;
  /**
   * @remarks
   * The IP address that is used by the client for live streaming.
   * 
   * @example
   * 10.207.XX.XX
   */
  clientIP?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The time when the operation was performed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2015-12-01T16:36:18Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      clientIP: 'ClientIP',
      streamName: 'StreamName',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clientIP: 'string',
      streamName: 'string',
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

export class DescribeLiveStreamsControlHistoryResponseBodyControlInfo extends $dara.Model {
  liveStreamControlInfo?: DescribeLiveStreamsControlHistoryResponseBodyControlInfoLiveStreamControlInfo[];
  static names(): { [key: string]: string } {
    return {
      liveStreamControlInfo: 'LiveStreamControlInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveStreamControlInfo: { 'type': 'array', 'itemType': DescribeLiveStreamsControlHistoryResponseBodyControlInfoLiveStreamControlInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveStreamControlInfo)) {
      $dara.Model.validateArray(this.liveStreamControlInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamsControlHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operation records.
   */
  controlInfo?: DescribeLiveStreamsControlHistoryResponseBodyControlInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9C31856F-386D-4DB3-BE79-A0AA493D702A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      controlInfo: 'ControlInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlInfo: DescribeLiveStreamsControlHistoryResponseBodyControlInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.controlInfo && typeof (this.controlInfo as any).validate === 'function') {
      (this.controlInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

