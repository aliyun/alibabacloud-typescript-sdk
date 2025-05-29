// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUnbindPurchasedDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  deviceId?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

