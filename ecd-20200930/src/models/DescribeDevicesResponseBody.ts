// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDevicesResponseBodyDevicesEndUserList extends $dara.Model {
  /**
   * @remarks
   * The address of the AD office network.
   * 
   * @example
   * xn--0zw****
   */
  adDomain?: string;
  /**
   * @remarks
   * The ID of the convenient office network.
   * 
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * moli
   */
  endUserId?: string;
  /**
   * @remarks
   * The account type of the user.
   * 
   * Valid values:
   * 
   * *   AD: enterprise AD account.
   * *   SIMPLE: convenience account
   * 
   * @example
   * SIMPLE
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      directoryId: 'string',
      endUserId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBodyDevices extends $dara.Model {
  /**
   * @remarks
   * The ID of the device. The serial number (SN) of the hardware client or the UUID of the software client.
   * 
   * @example
   * 5F52817BE267A43C608D245070D2****
   */
  deviceId?: string;
  /**
   * @remarks
   * The users who are bound to the device.
   */
  endUserList?: DescribeDevicesResponseBodyDevicesEndUserList[];
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      endUserList: 'EndUserList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      endUserList: { 'type': 'array', 'itemType': DescribeDevicesResponseBodyDevicesEndUserList },
    };
  }

  validate() {
    if(Array.isArray(this.endUserList)) {
      $dara.Model.validateArray(this.endUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about devices that you queried.
   */
  devices?: DescribeDevicesResponseBodyDevices[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5BEFE642-A383-4A18-8939-FB7DE452****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': DescribeDevicesResponseBodyDevices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.devices)) {
      $dara.Model.validateArray(this.devices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

