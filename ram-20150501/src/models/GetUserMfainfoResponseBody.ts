// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserMFAInfoResponseBodyMFADevice extends $dara.Model {
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * @example
   * acs:ram::177242285274****:mfa/test
   */
  serialNumber?: string;
  /**
   * @remarks
   * The type of the MFA device. Valid values:
   * 
   * *   VMFA: virtual MFA device.
   * *   U2F: Universal 2nd Factor (U2F) security key.
   * 
   * @example
   * VMFA
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserMFAInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the MFA device that is bound to the RAM user.
   */
  MFADevice?: GetUserMFAInfoResponseBodyMFADevice;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MFADevice: 'MFADevice',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFADevice: GetUserMFAInfoResponseBodyMFADevice,
      requestId: 'string',
    };
  }

  validate() {
    if(this.MFADevice && typeof (this.MFADevice as any).validate === 'function') {
      (this.MFADevice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

