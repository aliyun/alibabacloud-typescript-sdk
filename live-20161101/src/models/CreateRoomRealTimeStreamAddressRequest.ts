// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoomRealTimeStreamAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraVideo Real-time Communication application. Only a single ID is supported. The value can contain uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 64 characters. You can view your application IDs by navigating to **ApsaraVideo Live > Live+ > Real-time Communication > Application Management**. If no application exists, create one by clicking **Create Application**.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel to join. Only a single ID is supported. The value can contain uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The display name of the RTMP stream in the channel. Maximum length: 40 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp-dname
   */
  displayName?: string;
  /**
   * @remarks
   * The validity period of the RTMP URL. Unit: seconds. Default value: 36000 (10 hours).
   * 
   * @example
   * 43200
   */
  expireTime?: number;
  /**
   * @remarks
   * The user ID for the RTMP stream ingest. This value must not duplicate any other user ID in the channel. The value can contain uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 64 characters.
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

