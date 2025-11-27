// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveMfaDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the AD office network.
   * 
   * @example
   * alpha.lftltd.net
   */
  adDomain?: string;
  /**
   * @remarks
   * The serial number of the virtual MFA device. You can call the [DescribeMfaDevices](~~DescribeMfaDevices~~) operation to get this information.
   * 
   * This parameter is required.
   * 
   * @example
   * dc856334-446b-4035-bfbc-18af261e****
   */
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
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

