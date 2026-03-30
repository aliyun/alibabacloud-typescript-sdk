// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindMFADeviceResponseBodyMFADevice extends $dara.Model {
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * @example
   * acs:ram::151298381312****:mfa/device001
   */
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindMFADeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the MFA device.
   */
  MFADevice?: UnbindMFADeviceResponseBodyMFADevice;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A26CB3E9-1021-452A-AC57-3134B3BA0E4C
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
      MFADevice: UnbindMFADeviceResponseBodyMFADevice,
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

