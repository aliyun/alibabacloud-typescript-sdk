// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The device label ID. You can obtain this value from:
   * - [ListDeviceGroups](~~ListDeviceGroups~~): Lists device labels.
   * - [CreateDeviceGroup](~~CreateDeviceGroup~~): Creates a device label.
   * 
   * This parameter is required.
   * 
   * @example
   * device-group-5191cf830a5e****
   */
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

