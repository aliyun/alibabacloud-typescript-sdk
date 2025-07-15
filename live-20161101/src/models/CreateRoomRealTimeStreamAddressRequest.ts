// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoomRealTimeStreamAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ARTC application. You can specify only one application ID. The ID can be up to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel. You can specify only one ID. The ID can be up to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The name of the RTMP stream. The name can be up to 40 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp-dname
   */
  displayName?: string;
  /**
   * @remarks
   * The validity period of the RTMP URL. Unit: seconds. The default value is 36,000 seconds, which is 10 hours.
   * 
   * @example
   * 43200
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the user who ingests the stream over RTMP. The user ID must be different from IDs of other users in the channel. The ID can be up to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp-uuid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      displayName: 'DisplayName',
      expireTime: 'ExpireTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
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

