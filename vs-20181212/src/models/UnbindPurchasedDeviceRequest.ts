// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindPurchasedDeviceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3939*****6580539-cn-qingdao
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

