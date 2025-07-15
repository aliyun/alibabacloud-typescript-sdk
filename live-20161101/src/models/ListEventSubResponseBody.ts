// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventSubResponseBodySubscribers extends $dara.Model {
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://****.com/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The ID of the channel to which you subscribe.
   * 
   * @example
   * testmodify
   */
  channelId?: string;
  /**
   * @remarks
   * The time when the subscription was created. The time is displayed in UTC+8. Format: yyyy-MM-dd hh:mm:ss.
   * 
   * @example
   * 2023-08-18 10:14:49
   */
  createTime?: string;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * *   ChannelEvent: channel event. For example, the channel is opened or closed.
   * *   UserEvent: user event. For example, a user joins or leaves the channel.
   */
  events?: string[];
  /**
   * @remarks
   * The time when the subscription was modified. The time is displayed in UTC+8. Format: yyyy-MM-dd hh:mm:ss.
   * 
   * @example
   * 2023-08-18 10:14:49
   */
  modifyTime?: string;
  /**
   * @remarks
   * The role of the user whose events are returned. Valid values:
   * 
   * *   1: streamer
   * *   2: viewer
   * 
   * An empty value or a value other than 1 and 2 indicates that events of all users in the channel are returned.
   * 
   * >  This parameter is deprecated. When you create a subscription, this parameter is no longer supported.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  roles?: number;
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 09be0d2254cb5a89f4cbd86403ec****
   */
  subId?: string;
  /**
   * @remarks
   * The user whose events are returned. We recommend that you use either this parameter or Roles.
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      channelId: 'ChannelId',
      createTime: 'CreateTime',
      events: 'Events',
      modifyTime: 'ModifyTime',
      roles: 'Roles',
      subId: 'SubId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      channelId: 'string',
      createTime: 'string',
      events: { 'type': 'array', 'itemType': 'string' },
      modifyTime: 'string',
      roles: 'number',
      subId: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventSubResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE050E24-BE9B-1E79-BB30-7EA0BBAE7F08
   */
  requestId?: string;
  /**
   * @remarks
   * The events.
   */
  subscribers?: ListEventSubResponseBodySubscribers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subscribers: 'Subscribers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subscribers: { 'type': 'array', 'itemType': ListEventSubResponseBodySubscribers },
    };
  }

  validate() {
    if(Array.isArray(this.subscribers)) {
      $dara.Model.validateArray(this.subscribers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

