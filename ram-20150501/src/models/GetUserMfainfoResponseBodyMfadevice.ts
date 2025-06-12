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

