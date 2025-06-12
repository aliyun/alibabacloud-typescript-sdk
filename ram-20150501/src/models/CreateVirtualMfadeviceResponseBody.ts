// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVirtualMFADeviceResponseBodyVirtualMFADevice } from "./CreateVirtualMfadeviceResponseBodyVirtualMfadevice";


export class CreateVirtualMFADeviceResponseBody extends $dara.Model {
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
   * The information about the MFA device.
   */
  virtualMFADevice?: CreateVirtualMFADeviceResponseBodyVirtualMFADevice;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      virtualMFADevice: 'VirtualMFADevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      virtualMFADevice: CreateVirtualMFADeviceResponseBodyVirtualMFADevice,
    };
  }

  validate() {
    if(this.virtualMFADevice && typeof (this.virtualMFADevice as any).validate === 'function') {
      (this.virtualMFADevice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

