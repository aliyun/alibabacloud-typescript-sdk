// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMFADevicesForUserResponseBodyMFADevices extends $dara.Model {
  /**
   * @remarks
   * The ID of the MFA device.
   * 
   * @example
   * mfa-00ujhet8pycljj7j****
   */
  deviceId?: string;
  /**
   * @remarks
   * The name of the MFA device.
   * 
   * @example
   * Alice-MFA1
   */
  deviceName?: string;
  /**
   * @remarks
   * The type of the MFA device. The value is fixed as TOTP, which indicates a virtual MFA device. Virtual MFA devices are based on the Time-based One-time Password (TOTP) algorithm.
   * 
   * @example
   * TOTP
   */
  deviceType?: string;
  /**
   * @remarks
   * The time when the MFA device was enabled.
   * 
   * @example
   * 2021-10-29T09:14:06Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      deviceType: 'DeviceType',
      effectiveTime: 'EffectiveTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      deviceType: 'string',
      effectiveTime: 'string',
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

