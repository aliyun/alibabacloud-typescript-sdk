// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushDeviceDataRequestDevices } from "./PushDeviceDataRequestDevices";


export class PushDeviceDataRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the device. [View device type definitions](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/Deviceappendixes-en.pdf)
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  deviceType?: string;
  /**
   * @remarks
   * List of devices to which data is pushed.
   * 
   * This parameter is required.
   */
  devices?: PushDeviceDataRequestDevices[];
  static names(): { [key: string]: string } {
    return {
      deviceType: 'deviceType',
      devices: 'devices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      devices: { 'type': 'array', 'itemType': PushDeviceDataRequestDevices },
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

