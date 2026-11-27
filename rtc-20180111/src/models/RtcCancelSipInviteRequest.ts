// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RtcCancelSipInviteRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Create and find this ID in the console. Specify only one ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of an existing channel. Specify only one ID.
   * 
   * This parameter is required.
   * 
   * @example
   * $rtc_channelid
   */
  channelId?: string;
  /**
   * @remarks
   * The type of the third-party SIP device:
   * 
   * - sip_device
   * 
   * - mcu
   * 
   * - phone
   * 
   * Note: Only the phone type is supported at this stage.
   * 
   * This parameter is required.
   * 
   * @example
   * phone
   */
  deviceType?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * $rtc_userid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      deviceType: 'DeviceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      deviceType: 'string',
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

