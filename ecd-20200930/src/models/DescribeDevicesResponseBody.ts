// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDevicesResponseBodyDevices } from "./DescribeDevicesResponseBodyDevices";


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

