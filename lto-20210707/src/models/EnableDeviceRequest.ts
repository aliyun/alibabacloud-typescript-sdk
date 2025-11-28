// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
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

