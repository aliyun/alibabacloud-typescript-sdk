// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The device ID. Any string can be used, and there are no specific format requirements.
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
   * The device password. The SIP device uses this password for authentication during registration. Store this password securely.
   * 
   * This parameter is required.
   * 
   * @example
   * password
   */
  password?: string;
  /**
   * @remarks
   * A JSON string that contains an array of agent IDs.
   * 
   * @example
   * ["user-test@ccc-test"]
   */
  userIdListJson?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      password: 'Password',
      userIdListJson: 'UserIdListJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      instanceId: 'string',
      password: 'string',
      userIdListJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

