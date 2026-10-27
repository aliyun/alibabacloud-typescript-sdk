// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LockMfaDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the AD office network.
   * 
   * @example
   * upower.vip
   */
  adDomain?: string;
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The serial number of the bound virtual MFA device. The user must first complete the MFA binding in the client authentication flow. You can call [DescribeMfaDevices](~~DescribeMfaDevices~~) to query the serial number of the bound device.
   * 
   * @example
   * dc856334-446b-4035-bfbc-18af261e****
   */
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      businessChannel: 'BusinessChannel',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      businessChannel: 'string',
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

