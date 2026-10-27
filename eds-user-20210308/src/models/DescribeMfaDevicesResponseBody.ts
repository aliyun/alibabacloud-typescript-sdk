// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMfaDevicesResponseBodyMfaDevicesAdUser extends $dara.Model {
  /**
   * @remarks
   * The display name of the AD user.
   * 
   * @example
   * aduser
   */
  displayName?: string;
  /**
   * @remarks
   * The new display name of the AD user.
   * 
   * @example
   * Zhang San
   */
  displayNameNew?: string;
  /**
   * @remarks
   * The AD username.
   * 
   * @example
   * aduser
   */
  endUser?: string;
  /**
   * @remarks
   * The user principal name of the AD user.
   * 
   * @example
   * alice@example.com
   */
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
  /**
   * @remarks
   * The information about the AD user associated with the virtual MFA device.
   */
  adUser?: DescribeMfaDevicesResponseBodyMfaDevicesAdUser;
  /**
   * @remarks
   * The number of consecutive failures to bind or authenticate the virtual MFA device.
   * 
   * @example
   * 0
   */
  consecutiveFails?: number;
  /**
   * @remarks
   * The type of the virtual MFA device. Currently, only `TOTP_VIRTUAL` is supported, which indicates a virtual MFA device that complies with the TOTP algorithm.
   * 
   * @example
   * TOTP_VIRTUAL
   */
  deviceType?: string;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username of the convenience account that uses the virtual MFA device.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the virtual MFA device was enabled. The time is specified in ISO 8601 format in UTC. Format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2021-06-22T06:20:49Z
   */
  gmtEnabled?: string;
  /**
   * @remarks
   * The automatic unlock time after the virtual MFA device is locked. The time is specified in ISO 8601 format in UTC. Format: `yyyy-MM-ddTHH:mm:ssZ`.
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
   * The information about the virtual MFA devices.
   */
  mfaDevices?: DescribeMfaDevicesResponseBodyMfaDevices[];
  /**
   * @remarks
   * The token used to start the next query.
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

