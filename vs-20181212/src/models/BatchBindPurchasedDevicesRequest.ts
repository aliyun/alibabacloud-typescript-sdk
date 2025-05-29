// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchBindPurchasedDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      groupId: 'string',
      ownerId: 'number',
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

