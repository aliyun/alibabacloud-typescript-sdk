// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePubUserListBySubUserRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * Channel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * The channel creation time. You can query data from the last 30 days. The value is represented as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @remarks
   * The channel release time, represented as a UNIX timestamp in seconds. If this parameter is empty, the current time is used.  
   * > If the provided channel release time exceeds the actual release time, data from the creation time to the actual release time will be returned.
   * 
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * Subscriber User ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testuserid
   */
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      subUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

