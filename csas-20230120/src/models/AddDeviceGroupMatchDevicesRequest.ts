// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDeviceGroupMatchDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of terminal device IDs to add. At least one ID must be specified, and duplicate values are not allowed.
   * 
   * This parameter is required.
   */
  devTags?: string[];
  /**
   * @remarks
   * The device label ID.
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

