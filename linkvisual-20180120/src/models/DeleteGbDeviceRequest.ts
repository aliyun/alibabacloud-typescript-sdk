// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGbDeviceRequest extends $dara.Model {
  deviceName?: string;
  iotId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotInstanceId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      productKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

