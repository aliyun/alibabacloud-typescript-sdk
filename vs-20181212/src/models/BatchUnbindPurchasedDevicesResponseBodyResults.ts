// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUnbindPurchasedDevicesResponseBodyResults extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      error: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

