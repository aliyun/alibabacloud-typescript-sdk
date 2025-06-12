// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser } from "./ListVirtualMfadevicesResponseBodyVirtualMfadevicesVirtualMfadeviceUser";


export class ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice extends $dara.Model {
  /**
   * @remarks
   * The time when the MFA device was enabled.
   * 
   * @example
   * 2015-02-18T17:22:08Z
   */
  activateDate?: string;
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * @example
   * acs:ram::123456789012****:mfa/device002
   */
  serialNumber?: string;
  /**
   * @remarks
   * The basic information about the Resource Access Management (RAM) user to which the MFA device is bound.
   */
  user?: ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser;
  static names(): { [key: string]: string } {
    return {
      activateDate: 'ActivateDate',
      serialNumber: 'SerialNumber',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateDate: 'string',
      serialNumber: 'string',
      user: ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

