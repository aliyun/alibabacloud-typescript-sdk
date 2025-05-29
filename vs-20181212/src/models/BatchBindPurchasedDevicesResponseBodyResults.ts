// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchBindPurchasedDevicesResponseBodyResults extends $dara.Model {
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
   * 238*****380-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      error: 'Error',
      groupId: 'GroupId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      error: 'string',
      groupId: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

