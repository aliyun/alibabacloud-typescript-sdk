// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMfaDevicesResponseBodyMfaDevices extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive failures to bind the virtual MFA device, or the number of authentication failures based on the virtual MFA device.
   * 
   * @example
   * 0
   */
  consecutiveFails?: number;
  /**
   * @remarks
   * The type of the virtual MFA device. The value can only be TOTP_VIRTUAL. This value indicates that the virtual MFA device follows the Time-based One-time Password (TOTP) algorithm.
   * 
   * @example
   * TOTP_VIRTUAL
   */
  deviceType?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username of the convenience user that uses the virtual MFA device.
   * 
   * @example
   * test
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the virtual MFA device was enabled. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-22T06:20:49Z
   */
  gmtEnabled?: string;
  /**
   * @remarks
   * The time when the locked virtual MFA device was automatically unlocked. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-23T06:20:49Z
   */
  gmtUnlock?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 36
   */
  id?: number;
  /**
   * @remarks
   * The serial number of the virtual MFA device. The serial number is unique for each device.
   * 
   * @example
   * dc856334-446b-4035-bfbc-18af261e****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The status of the virtual MFA device.
   * 
   * Valid values:
   * 
   * *   LOCKED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   UNBOUND
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NORMAL
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      consecutiveFails: 'ConsecutiveFails',
      deviceType: 'DeviceType',
      email: 'Email',
      endUserId: 'EndUserId',
      gmtEnabled: 'GmtEnabled',
      gmtUnlock: 'GmtUnlock',
      id: 'Id',
      serialNumber: 'SerialNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consecutiveFails: 'number',
      deviceType: 'string',
      email: 'string',
      endUserId: 'string',
      gmtEnabled: 'string',
      gmtUnlock: 'string',
      id: 'number',
      serialNumber: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

