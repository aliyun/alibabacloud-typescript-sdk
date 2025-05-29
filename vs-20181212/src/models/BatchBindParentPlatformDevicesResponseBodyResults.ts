// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchBindParentPlatformDevicesResponseBodyResults extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @example
   * some error
   */
  error?: string;
  /**
   * @example
   * 361*****212-cn-qingdao
   */
  parentPlatformId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      error: 'Error',
      parentPlatformId: 'ParentPlatformId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      error: 'string',
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

