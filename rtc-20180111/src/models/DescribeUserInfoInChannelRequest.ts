// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserInfoInChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, which is created and queried through the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 4eah****
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The user ID. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * testId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
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

