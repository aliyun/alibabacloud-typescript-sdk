// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUserDevicesStatusResponseBodyDevices } from "./UpdateUserDevicesStatusResponseBodyDevices";


export class UpdateUserDevicesStatusResponseBody extends $dara.Model {
  devices?: UpdateUserDevicesStatusResponseBodyDevices[];
  /**
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
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
      devices: { 'type': 'array', 'itemType': UpdateUserDevicesStatusResponseBodyDevices },
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

