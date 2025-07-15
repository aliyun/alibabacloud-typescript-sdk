// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcMPUEventSubResponseBodySubInfo extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can specify only one application ID.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://testcallback***.com/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The ID of the channel to which mixed-stream relay event callbacks are sent. Multiple channel IDs are separated by commas (,). If this parameter is not returned, mixed-stream relay event callbacks are sent to all channels.
   * 
   * @example
   * yourCh1,yourCh2
   */
  channelIds?: string;
  /**
   * @remarks
   * The time when the event callback was fired. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2024-04-09 18:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the subscription.
   * 
   * @example
   * Sub-******9799B2C4500******
   */
  subId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackUrl: 'CallbackUrl',
      channelIds: 'ChannelIds',
      createTime: 'CreateTime',
      subId: 'SubId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackUrl: 'string',
      channelIds: 'string',
      createTime: 'string',
      subId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcMPUEventSubResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the subscription.
   */
  subInfo?: DescribeRtcMPUEventSubResponseBodySubInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subInfo: 'SubInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subInfo: DescribeRtcMPUEventSubResponseBodySubInfo,
    };
  }

  validate() {
    if(this.subInfo && typeof (this.subInfo as any).validate === 'function') {
      (this.subInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

