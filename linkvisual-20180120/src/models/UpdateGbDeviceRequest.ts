// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGbDeviceRequest extends $dara.Model {
  description?: string;
  deviceName?: string;
  gbId?: string;
  iotId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotInstanceId?: string;
  password?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceName: 'DeviceName',
      gbId: 'GbId',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      password: 'Password',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceName: 'string',
      gbId: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      password: 'string',
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

