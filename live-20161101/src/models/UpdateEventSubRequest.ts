// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventSubRequest extends $dara.Model {
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
   * The callback URL. For more information about the callback content, see CreateEventSub.
   * 
   * This parameter is required.
   * 
   * @example
   * http://****.com/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The channel ID. You can call the [ListEventSub](https://help.aliyun.com/document_detail/2848210.html) operation to query the channel ID.
   * 
   * > 
   * 
   * *   This parameter is required if you specify the Users.N parameter.
   * 
   * *   If you set this parameter to \\* or do not specify this parameter, all channels are subscribed to.
   * 
   * *   You can create up to 20 subscriptions for each application ID.
   * 
   * @example
   * 123333
   */
  channelId?: string;
  /**
   * @remarks
   * The type of the events to which you want to subscribe.
   * 
   * This parameter is required.
   */
  events?: string[];
  /**
   * @remarks
   * The subscription ID. You can obtain the ID from the response to the [CreateEventSub](https://help.aliyun.com/document_detail/2848209.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ad53276431c****
   */
  subscribeId?: string;
  /**
   * @remarks
   * The user whose events you want to subscribe to.
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackUrl: 'CallbackUrl',
      channelId: 'ChannelId',
      events: 'Events',
      subscribeId: 'SubscribeId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackUrl: 'string',
      channelId: 'string',
      events: { 'type': 'array', 'itemType': 'string' },
      subscribeId: 'string',
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

