// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMFADevicesForUserResponseBodyMFADevices extends $dara.Model {
  /**
   * @remarks
   * The MFA device ID.
   * 
   * @example
   * mfa-00ujhet8pycljj7j****
   */
  deviceId?: string;
  /**
   * @remarks
   * The MFA device name.
   * 
   * @example
   * Alice-MFA1
   */
  deviceName?: string;
  /**
   * @remarks
   * The MFA device type. Valid values:
   * - TOTP: a virtual MFA device based on the Time-based One-Time Password algorithm.
   * - CrossPlatformPasskey: a cross-platform passkey.
   * - PlatformPasskey: a platform built-in passkey.
   * 
   * @example
   * TOTP
   */
  deviceType?: string;
  /**
   * @remarks
   * The effective period. The time is in UTC and follows the RFC 3339 format (YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2021-10-29T09:14:06Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The last time the MFA device was used.
   * 
   * @example
   * 2026-08-12T07:26:12Z
   */
  lastUseTime?: string;
  /**
   * @remarks
   * The user ID.
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
      lastUseTime: 'LastUseTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      deviceName: 'string',
      deviceType: 'string',
      effectiveTime: 'string',
      lastUseTime: 'string',
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

export class ListMFADevicesForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The MFA device list.
   */
  MFADevices?: ListMFADevicesForUserResponseBodyMFADevices[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8B9982ED-FD0D-5622-8EA0-7B768685DCE7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of MFA devices.
   * 
   * @example
   * 1
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      MFADevices: 'MFADevices',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFADevices: { 'type': 'array', 'itemType': ListMFADevicesForUserResponseBodyMFADevices },
      requestId: 'string',
      totalCounts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.MFADevices)) {
      $dara.Model.validateArray(this.MFADevices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

