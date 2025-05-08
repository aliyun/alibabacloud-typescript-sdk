// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeviceServiceResponseBodyResourceInfosDeviceInfosNetwork } from "./DescribeDeviceServiceResponseBodyResourceInfosDeviceInfosNetwork";


export class DescribeDeviceServiceResponseBodyResourceInfosDeviceInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the device.
   * 
   * @example
   * test-api
   */
  name?: string;
  /**
   * @remarks
   * The network information.
   */
  network?: DescribeDeviceServiceResponseBodyResourceInfosDeviceInfosNetwork[];
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      network: 'Network',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      network: { 'type': 'array', 'itemType': DescribeDeviceServiceResponseBodyResourceInfosDeviceInfosNetwork },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

