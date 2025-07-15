// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSubRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  /**
   * @remarks
   * The callback URL. For more information about the content of the messages that are sent to the callback URL, see the Callback section in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * http://****.com/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The channel ID. You can call the [ListEventSub](https://help.aliyun.com/document_detail/2628135.html) operation to query the channel ID.
   * 
   * > 
   * 
   * *   This parameter is required if you specify the Users.N parameter.
   * 
   * *   If you set this parameter to \\* or do not specify this parameter, all channels are subscribed to.
   * 
   * *   Each application ID allows only one all-channel subscription.
   * 
   * @example
   * 123333
   */
  channelId?: string;
  /**
   * @remarks
   * Subscribe to events.
   * 
   * This parameter is required.
   */
  events?: string[];
  /**
   * @remarks
   * The user whose events you want to subscribe to. If you leave this parameter empty, the events of all users in the channel are subscribed to, including the events of the streamer and viewers. Specify this parameter in the following format:
   * 
   *     Users.1=****
   *     Users.2=****
   *     ......
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackUrl: 'CallbackUrl',
      channelId: 'ChannelId',
      events: 'Events',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackUrl: 'string',
      channelId: 'string',
      events: { 'type': 'array', 'itemType': 'string' },
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

