// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeChannelUserResponseBodySessions } from "./DescribeChannelUserResponseBodySessions";


export class DescribeChannelUserResponseBody extends $dara.Model {
  channelExist?: boolean;
  inChannel?: boolean;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  sessions?: DescribeChannelUserResponseBodySessions[];
  static names(): { [key: string]: string } {
    return {
      channelExist: 'ChannelExist',
      inChannel: 'InChannel',
      requestId: 'RequestId',
      sessions: 'Sessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelExist: 'boolean',
      inChannel: 'boolean',
      requestId: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeChannelUserResponseBodySessions },
    };
  }

  validate() {
    if(Array.isArray(this.sessions)) {
      $dara.Model.validateArray(this.sessions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

