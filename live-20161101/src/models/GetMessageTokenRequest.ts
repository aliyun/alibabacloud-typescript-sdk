// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the interactive messaging application.
   * 
   * This parameter is required.
   * 
   * @example
   * a494caec-***-695ef345db77
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the device. Each device has a unique ID. You can specify a custom ID. The ID can be up to 64 characters in length and can contain lowercase letters, digits, underscores (_), and hyphen (-). You can specify multiple device IDs. We recommend that you obtain the IDs from the devices and pass the IDs to the server.
   * 
   * This parameter is required.
   * 
   * @example
   * a494caec-***-695ef345db77
   */
  deviceId?: string;
  /**
   * @remarks
   * The type of the device. Valid values:
   * 
   * *   ios
   * *   android
   * *   web
   * *   pc
   * 
   * This parameter is required.
   * 
   * @example
   * android
   */
  deviceType?: string;
  /**
   * @remarks
   * The ID of the user. Each user has a unique ID in the application. The ID can be up to 32 characters in length and can contain lowercase letters, digits, underscores (_), and periods (.). You can specify multiple user IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * de1**a0
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deviceId: 'DeviceId',
      deviceType: 'DeviceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deviceId: 'string',
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

