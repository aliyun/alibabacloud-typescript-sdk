// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDeviceGroupMatchDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the terminal devices to add. You must specify at least one ID, and the IDs must be unique.
   * 
   * This parameter is required.
   */
  devTags?: string[];
  /**
   * @remarks
   * The ID of the device tag.
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

