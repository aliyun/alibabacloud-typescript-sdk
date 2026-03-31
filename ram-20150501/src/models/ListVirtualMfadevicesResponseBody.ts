// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADeviceUser extends $dara.Model {
  displayName?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualMFADevicesResponseBodyVirtualMFADevicesVirtualMFADevice extends $dara.Model {
  activateDate?: string;
  serialNumber?: string;
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

export class ListVirtualMFADevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
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

