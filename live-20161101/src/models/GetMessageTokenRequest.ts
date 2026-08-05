// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageTokenRequest extends $dara.Model {
  /**
   * @remarks
   * Interactive Messages application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a494caec-***-695ef345db77
   */
  appId?: string;
  /**
   * @remarks
   * Terminal device ID, uniquely representing a user terminal device, user-defined. It consists of lowercase letters, numbers, underscores (_), and hyphens (-), with a maximum length of 64 characters. Different terminal devices need to use different DeviceIds. We recommend obtaining it from the terminal device and passing it to the server.
   * 
   * This parameter is required.
   * 
   * @example
   * a494caec-***-695ef345db77
   */
  deviceId?: string;
  /**
   * @remarks
   * Terminal device type. Valid values:
   * 
   * - ios
   * 
   * - android
   * 
   * - web
   * 
   * - pc
   * 
   * This parameter is required.
   * 
   * @example
   * android
   */
  deviceType?: string;
  /**
   * @remarks
   * User UserId, user-defined, unique within the AppId. It consists of lowercase letters, numbers, underscores (_), and periods (.), with a maximum length of 32 characters. Different users need to use different UserIds.
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

