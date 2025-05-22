// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnlockMfaDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The domain of the Active Directory (AD) workspace.
   * 
   * @example
   * welab.co.id
   */
  adDomain?: string;
  /**
   * @remarks
   * The serial number of the virtual MFA device. The serial number is unique for each device.
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

