// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDevicesResponseBodyDevicesEndUserList } from "./DescribeDevicesResponseBodyDevicesEndUserList";


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

