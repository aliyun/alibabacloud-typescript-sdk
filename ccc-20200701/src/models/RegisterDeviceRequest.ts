// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The custom device ID. No specific format is required.
   * 
   * This parameter is required.
   * 
   * @example
   * test-device
   */
  deviceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The password used to authenticate the SIP device during registration. Keep this password secure.
   * 
   * This parameter is required.
   * 
   * @example
   * password
   */
  password?: string;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      password: 'Password',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      password: 'string',
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

