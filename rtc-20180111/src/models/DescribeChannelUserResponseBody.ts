// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelUserResponseBodySessions extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp in seconds when the user joined the channel. The time is in UTC.
   * 
   * @example
   * 1557909133
   */
  joined?: number;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * xa744sxx8rtobgj****
   */
  sessionId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1811****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      joined: 'Joined',
      sessionId: 'SessionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joined: 'number',
      sessionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the channel exists. Valid values:
   * - **true**: The channel exists.
   * - **false**: The channel does not exist.
   */
  channelExist?: boolean;
  /**
   * @remarks
   * Indicates whether the user is currently in the channel. Valid values:
   * - **true**: The user is in the channel.
   * - **false**: The user is not in the channel.
   */
  inChannel?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @remarks
   * The list of session information.
   */
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

