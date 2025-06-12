// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice } from "./ListVirtualMfadevicesResponseBodyVirtualMfadevicesVirtualMfadevice";


export class ListVirtualMFADevicesResponseBodyVirtualMFADevices extends $dara.Model {
  virtualMFADevice?: ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice[];
  static names(): { [key: string]: string } {
    return {
      virtualMFADevice: 'VirtualMFADevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualMFADevice: { 'type': 'array', 'itemType': ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice },
    };
  }

  validate() {
    if(Array.isArray(this.virtualMFADevice)) {
      $dara.Model.validateArray(this.virtualMFADevice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

