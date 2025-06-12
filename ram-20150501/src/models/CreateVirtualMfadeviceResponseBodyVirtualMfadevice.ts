// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualMFADeviceResponseBodyVirtualMFADevice extends $dara.Model {
  /**
   * @remarks
   * The key of the MFA device.
   * 
   * @example
   * DSF98HAD982KJA9SDFNAS9D8FU839B8ADHBGS****
   */
  base32StringSeed?: string;
  /**
   * @remarks
   * The Base64-encoded QR code, in the PNG format.
   * 
   * @example
   * YXNkZmFzZDlmeW5hc2Q5OGZoODd4bXJmcThhaGU5aSBmYXNkZiBzYWRmIGFGIDRxd2VjIGEgdHEz****
   */
  QRCodePNG?: string;
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * @example
   * acs:ram::123456789012****:mfa/device001
   */
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      base32StringSeed: 'Base32StringSeed',
      QRCodePNG: 'QRCodePNG',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base32StringSeed: 'string',
      QRCodePNG: 'string',
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

