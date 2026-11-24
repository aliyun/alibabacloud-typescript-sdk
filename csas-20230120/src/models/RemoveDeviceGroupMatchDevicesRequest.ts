// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDeviceGroupMatchDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the terminal devices to remove. Specify at least one ID. Duplicate IDs are not allowed.
   * 
   * This parameter is required.
   */
  devTags?: string[];
  /**
   * @remarks
   * The ID of the device label.
   * 
   * This parameter is required.
   * 
   * @example
   * device-group-5191cf830a5e****
   */
  deviceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      devTags: 'DevTags',
      deviceGroupId: 'DeviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devTags: { 'type': 'array', 'itemType': 'string' },
      deviceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.devTags)) {
      $dara.Model.validateArray(this.devTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

