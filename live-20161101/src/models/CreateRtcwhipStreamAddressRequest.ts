// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRTCWhipStreamAddressRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6a0**6dcc-xxxx-xxxx-xxxx-e**e3exxxxxx
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ch00000****001
   */
  channelId?: string;
  /**
   * @example
   * 58E73333-xxxx-xxxx-xxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @example
   * 43200
   */
  expireTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zb0000****0001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      expireTime: 'ExpireTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      clientToken: 'string',
      displayName: 'string',
      expireTime: 'number',
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

