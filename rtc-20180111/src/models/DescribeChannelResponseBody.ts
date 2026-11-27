// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelResponseBodyChannel extends $dara.Model {
  /**
   * @remarks
   * channel ID.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * The UNIX timestamp (in seconds) indicating when the channel started (UTC).
   * 
   * @example
   * 1557909133
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * channel
   */
  channel?: DescribeChannelResponseBodyChannel;
  /**
   * @remarks
   * Indicates whether the channel exists. Valid values:  
   * - **true**: The channel exists.  
   * - **false**: The channel does not exist.
   */
  channelExist?: boolean;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      channelExist: 'ChannelExist',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: DescribeChannelResponseBodyChannel,
      channelExist: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(this.channel && typeof (this.channel as any).validate === 'function') {
      (this.channel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

