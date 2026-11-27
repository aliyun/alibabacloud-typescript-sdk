// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventSubscribeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the subscribed application.
   * 
   * This parameter is required.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  /**
   * @remarks
   * The callback URL. For information about the callback content, see the following callback content example.
   * 
   * This parameter is required.
   * 
   * @example
   * http://****.com/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The ID of the subscribed channel.
   * 
   * > This parameter is required if the Users.N parameter is not empty.
   * 
   * @example
   * 123333
   */
  channelId?: string;
  /**
   * @remarks
   * The idempotence identifier used by the client to create the subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscribed events.
   * 
   * This parameter is required.
   * 
   * @example
   * ChannelEvent
   */
  events?: string[];
  /**
   * @remarks
   * Specifies whether to enable callback authentication. Valid values:
   * 
   * - **true**: enables callback authentication.
   * - **fasle** (default): disables callback authentication.
   * 
   * For more information, see the following callback authentication description.
   * 
   * @example
   * false
   */
  needCallbackAuth?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The user role. Valid values:
   * 
   * - **1**: subscribes to host messages in the channel.
   * - **2**: subscribes to audience messages in the channel.
   * - **Empty or other values**: subscribes to messages from all roles in the channel without role filtering.
   * 
   * @example
   * 1
   */
  role?: number;
  /**
   * @remarks
   * The subscribed users.
   * 
   * @example
   * user1
   */
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackUrl: 'CallbackUrl',
      channelId: 'ChannelId',
      clientToken: 'ClientToken',
      events: 'Events',
      needCallbackAuth: 'NeedCallbackAuth',
      ownerId: 'OwnerId',
      role: 'Role',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackUrl: 'string',
      channelId: 'string',
      clientToken: 'string',
      events: { 'type': 'array', 'itemType': 'string' },
      needCallbackAuth: 'boolean',
      ownerId: 'number',
      role: 'number',
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

