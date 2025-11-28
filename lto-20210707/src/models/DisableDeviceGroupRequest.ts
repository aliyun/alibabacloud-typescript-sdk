// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableDeviceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

