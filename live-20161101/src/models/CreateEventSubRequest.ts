// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSubRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application to subscribe to. You can view your application IDs by navigating to **ApsaraVideo Live > Live+ > ApsaraVideo Real-time Communication > Application Management**. If no application exists, create one by clicking [Create Application].
   * 
   * This parameter is required.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  /**
   * @remarks
   * The callback URL. For the callback content, see the callback content examples below.
   * 
   * This parameter is required.
   * 
   * @example
   * http://****.com/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The ID of the channel to subscribe to. You can call the [ListEventSub](https://help.aliyun.com/document_detail/2848210.html) operation to query the subscribed channel IDs.
   * 
   * >- If the Users.N parameter is not empty, this parameter is required.
   * >- If ChannelId is set to \\* or left empty, all channels are subscribed. Each AppId allows only one all-channel subscription.
   * >- Each AppId allows a maximum of 20 subscriptions at the same time.
   * 
   * @example
   * 123333
   */
  channelId?: string;
  /**
   * @remarks
   * The subscription events.
   * 
   * This parameter is required.
   */
  events?: string[];
  /**
   * @remarks
   * The users whose messages you want to subscribe to. If this parameter is empty, all users in the channel (including streamers and viewers) are subscribed. Format:
   * 
   * ```
   * Users.1=****
   * Users.2=****
   * ......
   * ```
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

