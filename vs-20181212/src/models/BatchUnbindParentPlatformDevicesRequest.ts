// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUnbindParentPlatformDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 361*****212-cn-qingdao
   */
  parentPlatformId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      ownerId: 'OwnerId',
      parentPlatformId: 'ParentPlatformId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      ownerId: 'number',
      parentPlatformId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

