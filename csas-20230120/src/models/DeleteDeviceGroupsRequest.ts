// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDeviceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of instance tag IDs to delete. Duplicate values are not allowed.
   */
  deviceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceGroupIds: 'DeviceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.deviceGroupIds)) {
      $dara.Model.validateArray(this.deviceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

