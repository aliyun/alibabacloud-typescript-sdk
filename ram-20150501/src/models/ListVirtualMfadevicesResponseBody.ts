// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVirtualMFADevicesResponseBodyVirtualMFADevices } from "./ListVirtualMfadevicesResponseBodyVirtualMfadevices";


export class ListVirtualMFADevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the MFA devices.
   */
  virtualMFADevices?: ListVirtualMFADevicesResponseBodyVirtualMFADevices;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      virtualMFADevices: 'VirtualMFADevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      virtualMFADevices: ListVirtualMFADevicesResponseBodyVirtualMFADevices,
    };
  }

  validate() {
    if(this.virtualMFADevices && typeof (this.virtualMFADevices as any).validate === 'function') {
      (this.virtualMFADevices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

