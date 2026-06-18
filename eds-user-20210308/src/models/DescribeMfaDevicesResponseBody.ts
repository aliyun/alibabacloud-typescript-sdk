// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMfaDevicesResponseBodyMfaDevicesAdUser extends $dara.Model {
  displayName?: string;
  displayNameNew?: string;
  endUser?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      displayNameNew: 'DisplayNameNew',
      endUser: 'EndUser',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      displayNameNew: 'string',
      endUser: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMfaDevicesResponseBodyMfaDevices extends $dara.Model {
  adUser?: DescribeMfaDevicesResponseBodyMfaDevicesAdUser;
  /**
   * @remarks
   * The number of consecutive failed attempts to bind or authenticate the virtual MFA device.
   * 
   * @example
   * 0
   */
  consecutiveFails?: number;
  /**
   * @remarks
   * The type of the virtual MFA device. Set the value to `TOTP_VIRTUAL`, which indicates a virtual MFA device that complies with the Time-based One-time Password (TOTP) algorithm.
   * 
   * @example
   * TOTP_VIRTUAL
   */
  deviceType?: string;
  /**
   * @remarks
   * > This parameter is not in use.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username of the convenience user who uses the virtual MFA device.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the virtual MFA device was enabled. The time is displayed in UTC and is formatted as `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2021-06-22T06:20:49Z
   */
  gmtEnabled?: string;
  /**
   * @remarks
   * The time when the locked virtual MFA device is automatically unlocked. The time is displayed in UTC and is formatted as `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2021-06-23T06:20:49Z
   */
  gmtUnlock?: string;
  /**
   * @remarks
   * The ID of the virtual MFA device.
   * 
   * @example
   * 36
   */
  id?: number;
  /**
   * @remarks
   * The serial number of the virtual MFA device.
   * 
   * @example
   * dc856334-446b-4035-bfbc-18af261e****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The status of the virtual MFA device.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      adUser: 'AdUser',
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
      adUser: DescribeMfaDevicesResponseBodyMfaDevicesAdUser,
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
    if(this.adUser && typeof (this.adUser as any).validate === 'function') {
      (this.adUser as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMfaDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of virtual MFA devices.
   */
  mfaDevices?: DescribeMfaDevicesResponseBodyMfaDevices[];
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6na6YlN9asMM31MsMcdQNpp
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 33DBB8EC-6E68-4726-91C4-E09C59D9A7D8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mfaDevices: 'MfaDevices',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mfaDevices: { 'type': 'array', 'itemType': DescribeMfaDevicesResponseBodyMfaDevices },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mfaDevices)) {
      $dara.Model.validateArray(this.mfaDevices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

