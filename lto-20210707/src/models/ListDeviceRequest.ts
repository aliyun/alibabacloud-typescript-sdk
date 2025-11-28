// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceGroupId?: string;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  num?: number;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      name: 'Name',
      num: 'Num',
      regionId: 'RegionId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      name: 'string',
      num: 'number',
      regionId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

