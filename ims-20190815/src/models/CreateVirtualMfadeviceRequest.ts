// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualMFADeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the MFA device.
   * 
   * The name must be 1 to 64 characters in length and can contain letters, digits, and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * device001
   */
  virtualMFADeviceName?: string;
  static names(): { [key: string]: string } {
    return {
      virtualMFADeviceName: 'VirtualMFADeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualMFADeviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

