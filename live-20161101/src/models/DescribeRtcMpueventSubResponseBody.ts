// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcMPUEventSubResponseBodySubInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the subscribed application.
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
   * The channel IDs of stream mixing tasks that receive callbacks, separated by commas (,). If this field is empty, all channels receive callbacks.
   * 
   * @example
   * yourCh1,yourCh2
   */
  channelIds?: string;
  /**
   * @remarks
   * The creation time of the event callback, in the format of yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * @example
   * 2024-04-09 18:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The event callback ID.
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
   * The event callback information.
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

